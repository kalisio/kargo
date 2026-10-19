# S3 unarchiving (cold zone → hot zone)

These scripts bring objects archived in `DEEP_ARCHIVE` (cold zone, OVH eu-west-par) back to the hot zone (`EXPRESS_ONEZONE`). You choose a date range and a pattern.

## How it works

Each run first looks at the real state of the selected objects. It uses **listings only**, with no request per object:

- cold zone: one `ListObjectsV2` per day, with the `RestoreStatus` attribute (OVH supports it)
- hot zone: one recursive listing of the output path

Each object then gets one of these states:

| State | Meaning |
|---|---|
| `hot` | already copied to the hot zone |
| `restored` | restore done, ready to copy |
| `ongoing` | restore in progress |
| `archived` | restore never requested, or expired |

Then each mode only does what is left. The scripts keep no state between runs, so you can stop and run any mode again at any time.

The cost of a run almost does not depend on the number of objects. For example, the status of a job with 2,240 objects takes 2.4 s. With v1, it took more than 15 min.

## Usage

```bash
./unarchive.sh        <request|move|all> <start> <end> <input_path> <pattern> <output_path>
./unarchive-status.sh <request|move>     <start> <end> <input_path> <pattern> <output_path>
```

- `start` and `end`: any date that GNU `date` understands, for example `2026-08-03` or `2026-08-03T12:00:00Z`. Listings are done per day. Use the pattern to select specific hours.
- `pattern`: extended regex on the **full object key**. Use `""` to select everything. `{n}` repetitions are rejected (exit 2) when the installed `awk` does not support them. This is the case of mawk 20200120 on Debian bookworm.
- The folder structure under `input_path` is kept as is under `output_path`.

| Command | What it does | Exit code |
|---|---|---|
| `unarchive.sh request` | requests the restore of `archived` objects, in parallel | 0 when the requests were sent |
| `unarchive.sh move` | copies `restored` objects with a single parallel rclone command | 0 when the copy worked, even if some objects are not ready yet |
| `unarchive.sh all` | `request`, then `status move` every `POLL_SECONDS` until everything is copied | 0 when everything is in the hot zone |
| `unarchive-status.sh request` | shows the number of objects per state | 0 when everything is restored, 1 otherwise |
| `unarchive-status.sh move` | shows the number of objects per state | 0 when everything is copied, 1 otherwise |

### Automatic catch-up (`HEAL`, on by default)

The application runs `request` and `move` only once, then it polls the status scripts. So the status scripts also finish what is left:

- `status request` requests `archived` objects again (failed requests or expired restores)
- `status move` does the same, then continues copying `restored` objects for at most `STATUS_MAX_DURATION`

This way, an interrupted move (pod restart, timeout, network issue) always finishes in the end. To only read the status without doing anything, use `HEAL=false`.

## Exit codes

| Code | Meaning | What to do |
|---|---|---|
| 0 | done | — |
| 1 | not done yet | run again later |
| 2 | usage or configuration error | **do not retry**, fix the parameters |
| 3 | temporary error (listing, network, copy) | run again later |

## Environment variables

| Variable | Default | Purpose |
|---|---|---|
| `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` | — | access to the cold zone (AWS CLI) |
| `AWS_REGION`, `AWS_ENDPOINT_URL` | — | region and endpoint of the cold zone |
| `COLD_BUCKET` | **required** | cold bucket |
| `RCLONE_CONF` | **required** | rclone config with both remotes |
| `COLD_REMOTE` / `HOT_REMOTE` | `wft-staging-cold` / `wft-staging` | rclone remotes |
| `HOT_STORAGE_CLASS` | `EXPRESS_ONEZONE` | storage class of the copy |
| `AVAILABILITY_DAYS` | `7` | how long the restored copy stays available, **billed upfront** |
| `TRANSFERS` | `8` | number of parallel copies |
| `CHECKERS` | `16` | number of parallel restore requests and checks |
| `STATUS_MAX_DURATION` | `10m` | max copy time during a `status move`, must stay below the caller's timeout |
| `HEAL` | `true` | automatic catch-up in the status scripts |
| `POLL_SECONDS` | `300` | delay between checks in `all` mode |
| `DRY_RUN` | `false` | `true`: only shows what would be done |

Required tools: `bash`, `aws` (recent CLI v2, with `--optional-object-attributes`), `rclone` 1.60 or later, GNU `date`, `awk`, `mktemp`.

## Examples

```bash
J=(2026-08-03 2026-08-09 wft/satellite '.*/GOESE_2026080[3-9]1[2-7][0-5]0\.tiff$' wft/analyses/test/satellite)
./unarchive.sh request "${J[@]}"
HEAL=false ./unarchive-status.sh request "${J[@]}"   # read only
./unarchive.sh move "${J[@]}"
./unarchive-status.sh move "${J[@]}"
DRY_RUN=true ./unarchive-status.sh move "${J[@]}"     # what would be done
```

## Changes since v1

- **State comes from listings**, instead of 2 or 3 calls per object. This removes the 15-min application timeout on big jobs (2,240 objects: over 900 s then killed in v1, 2.4 s now).
- **Expired restores are detected** (`archived` state) and requested again. v1 saw them as "restored", and then the copy failed.
- **One parallel `rclone copy --files-from`** instead of one `rclone copyto` per object. One failed object no longer stops the whole move.
- **Restore requests with `rclone backend restore`**, in parallel, without `GlacierJobParameters` (OVH does not support it).
- **An error is never taken for a state**: a failed listing gives exit 3, not an empty list that looked like "everything is done".
- **No more cache** in `/dev/shm`: listings take only a few seconds. This removes the bugs of a cache that was never refreshed and of an incomplete cache key.
- **Network timeouts on every call**: a stuck connection can no longer block for hours.
- **Logs are a short summary** (about 250 bytes, instead of 3 lines per object). This stays below the 1 MB `maxBuffer` limit of Node's `execFile`.
- **Arguments are checked** (dates, date order, pattern) and errors give exit 2.
- Only two entry points and one library. The old `unarchive-request*.sh` and `unarchive-move*.sh` scripts are removed: the application never called them directly.
