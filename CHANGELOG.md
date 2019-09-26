### 0.3.0 (2019-09-26)

##### New Features

*  Automate archive importation while deploying (closed [#81](https://github.com/kalisio/kargo/pull/81)) ([e353b1d0](https://github.com/kalisio/kargo/commit/e353b1d01825ca80fc4f2794dcfec3730d87c14d))
*  Allow to import an image from an archive (closed [#80](https://github.com/kalisio/kargo/pull/80)) ([5aa097ca](https://github.com/kalisio/kargo/commit/5aa097ca79f898b983208f16ba19f977681b54b2))
*  Allow to import an image from an archive (closed [#80](https://github.com/kalisio/kargo/pull/80)) ([0e7633df](https://github.com/kalisio/kargo/commit/0e7633dfac685aa67578ca6547fbb68b50865186))
*  Update AWS CLI installation method (closed [#79](https://github.com/kalisio/kargo/pull/79)) ([6c2408c4](https://github.com/kalisio/kargo/commit/6c2408c43c9ff12a81fe0d02d491bfdc693e891a))
*  Allow to define DATA_DB_URL for Kano and Weacast (closed [#75](https://github.com/kalisio/kargo/pull/75)) ([03893838](https://github.com/kalisio/kargo/commit/03893838f4137d519cc3d490f4a938188d372c77))
*  Update Teleray deploy file (closed [#74](https://github.com/kalisio/kargo/pull/74)) ([1f6a658d](https://github.com/kalisio/kargo/commit/1f6a658dad01b6569c281407076246fa626fe12f))
*  Allow to configure the number of processes/threads used by MapProxy (closed [#73](https://github.com/kalisio/kargo/pull/73)) ([13b9a9fd](https://github.com/kalisio/kargo/commit/13b9a9fd9c3a5805ee2bca56fd233e7ed8e030c2))
*  Docker specific configuration for the seeder should be retrieved from DOCKER_HOST (closed [#71](https://github.com/kalisio/kargo/pull/71)) ([ec74dfbd](https://github.com/kalisio/kargo/commit/ec74dfbd54fc177ee0f43dcdd434cf73ca85a00a))
*  Provide an helper script to install aws cli (closed [#69](https://github.com/kalisio/kargo/pull/69)) ([0f84533d](https://github.com/kalisio/kargo/commit/0f84533d3460ba7431439f17164e9ddf66ac2665))
*  replaced Weacast demo app by new API module closes https://github.com/kalisio/kargo/issues/66 ([6bf6e61a](https://github.com/kalisio/kargo/commit/6bf6e61a67ecc4ea5868051a42e62b606c53a931))
*  Provide a script to simplify installation on workers (closed [#64](https://github.com/kalisio/kargo/pull/64)) ([7a8cb388](https://github.com/kalisio/kargo/commit/7a8cb38889246a7911da4e177f1c1a79d98310cd))
*  Provide a subcommand to update the services (closed [#63](https://github.com/kalisio/kargo/pull/63)) ([379b067b](https://github.com/kalisio/kargo/commit/379b067b3716cf9b18d2acfb1baf3b0533eeb4ac))
*  added healthcheck on jobs Closes https://github.com/kalisio/kargo/issues/60 ([bdcb19e2](https://github.com/kalisio/kargo/commit/bdcb19e2a897e7d0392ef9ec698541f572c50c99))
*  added healthcheck on jobs Closes https://github.com/kalisio/kargo/projects/1 ([e9514b4d](https://github.com/kalisio/kargo/commit/e9514b4d9f0884de54df57d75d5a11c2edcc47c2))
*  Centralize default environment variables (closed [#58](https://github.com/kalisio/kargo/pull/58)) ([388828db](https://github.com/kalisio/kargo/commit/388828db537c96a25577a129c93d97faf64604af))
*  Define default envrionment variables in the deploy files(fixed [#58](https://github.com/kalisio/kargo/pull/58)) ([eeba098c](https://github.com/kalisio/kargo/commit/eeba098c01708c139ed12e19366a58d739e4294c))
*  Provide MapServer deployement capabilities (fixed [#50](https://github.com/kalisio/kargo/pull/50)) ([9c108bcb](https://github.com/kalisio/kargo/commit/9c108bcb3ec2f727e1679637b4884ec5895f6e9b))
*  Enhance the CLI (close [#53](https://github.com/kalisio/kargo/pull/53)) ([b18eb35a](https://github.com/kalisio/kargo/commit/b18eb35ac56d029c3d3ea6e4be2e2a0ecaa436ee))

##### Bug Fixes

*  S3 configuration is not set in Kano (fixed [#76](https://github.com/kalisio/kargo/pull/76)) ([2eb945cc](https://github.com/kalisio/kargo/commit/2eb945ccc7d9721ffad87bc5478c2e552bdbf6dd))
*  tried to make install-awscli independant from user ([ba719367](https://github.com/kalisio/kargo/commit/ba71936778536241fe39e7c8429984e24bf44d80))
*  DOCKER_CERT_PATH default value is restricted to ubuntu use (closed [#70](https://github.com/kalisio/kargo/pull/70)) ([0782ae6f](https://github.com/kalisio/kargo/commit/0782ae6f57e6521731931a6c742b80c511b1e5db))
*  Variable substitution error when deploying the services (closed [#61](https://github.com/kalisio/kargo/pull/61)) ([d51dede6](https://github.com/kalisio/kargo/commit/d51dede66a4624346fd6ddc3663c0d27b770fa4d))
*  Using environment variables as default values in deploy files does not work (closed [#59](https://github.com/kalisio/kargo/pull/59)) ([fd1c5ac1](https://github.com/kalisio/kargo/commit/fd1c5ac1cb7ad2631c9259761551338b4da2eddf))
*  K2 healthcheck must use the healthcheck entrypoint (fixed [#57](https://github.com/kalisio/kargo/pull/57)) ([64ede7d2](https://github.com/kalisio/kargo/commit/64ede7d25b2199e4a1ec93cdc822c5069fde7945))
*  Incorrect deployment files typo: updated_config (close [#54](https://github.com/kalisio/kargo/pull/54)) ([80f36710](https://github.com/kalisio/kargo/commit/80f3671016f629b823744af39ec74733e8eee3a5))

##### Other Changes

*  Allow to import an image from an archive [#80](https://github.com/kalisio/kargo/pull/80) ([fa16a3fb](https://github.com/kalisio/kargo/commit/fa16a3fb394998b37320f38655baa4f1e346f5f3))
*  Automate archive importation while deploying [#81](https://github.com/kalisio/kargo/pull/81) ([4c561815](https://github.com/kalisio/kargo/commit/4c561815c50ace7ecf52af594c27a7df9c1fa104))
*  Allow to load an image from an archive [#80](https://github.com/kalisio/kargo/pull/80) ([d3b0f6ca](https://github.com/kalisio/kargo/commit/d3b0f6ca4616cb22dc5d498cd5905d799fc1faa9))
*  Allow to load an image from an archive [#80](https://github.com/kalisio/kargo/pull/80) ([f0365a6f](https://github.com/kalisio/kargo/commit/f0365a6f8ac4e8d9cb4e491b526ff86cb296ffd4))
*  Allow to load an image from an archive [#80](https://github.com/kalisio/kargo/pull/80) ([70fea166](https://github.com/kalisio/kargo/commit/70fea1664233b4a5463338bf359c43e08cafa147))
*  Allow to load an image from an archive [#80](https://github.com/kalisio/kargo/pull/80) ([5ea491f3](https://github.com/kalisio/kargo/commit/5ea491f3b9d4233d7828fa8e1e047f74b142d855))
*  Allow to load an image from an archive ([#80](https://github.com/kalisio/kargo/pull/80)) ([49e13bf4](https://github.com/kalisio/kargo/commit/49e13bf46277622333758bcb0cb3f8c186893825))
*  Update AWS CLI installation method ([#79](https://github.com/kalisio/kargo/pull/79)) ([07ef3ebf](https://github.com/kalisio/kargo/commit/07ef3ebfc76186544cbdf8b494f333f114dac272))
*  S3 configuration is not set in Kano ([#76](https://github.com/kalisio/kargo/pull/76)) ([1282fcc4](https://github.com/kalisio/kargo/commit/1282fcc4abb049110c970beefdc7a7ce48405bf4))
*  Test the deployment of Hyrax ([#45](https://github.com/kalisio/kargo/pull/45)) ([c5a6906d](https://github.com/kalisio/kargo/commit/c5a6906d15c0c0dab034c31d31f032bf1bfd489c))
*  helper script install-awscli does not work if not root [#72](https://github.com/kalisio/kargo/pull/72) ([14fbb08b](https://github.com/kalisio/kargo/commit/14fbb08b6d210aaea4a784d1af7120272d7a4191))
*  helper script install-awscli does not work if not root [#72](https://github.com/kalisio/kargo/pull/72) ([dd6a3c1f](https://github.com/kalisio/kargo/commit/dd6a3c1fb24bd6e5e6aabe06115ebf28cbd4cdea))
*  helper script install-awscli does not work if not root [#72](https://github.com/kalisio/kargo/pull/72) ([a77530b9](https://github.com/kalisio/kargo/commit/a77530b9530970fc9d4b89a3292d38dc4aa52440))
*  helper script install-awscli does not work if not root [#72](https://github.com/kalisio/kargo/pull/72) ([675fc55b](https://github.com/kalisio/kargo/commit/675fc55b42a7786262d3697c58dcc5576265ad69))
*  trying to make install-awscli.sh work ([5c0db042](https://github.com/kalisio/kargo/commit/5c0db0422424b4eeabd5934c66418657ce299bc8))
*  install-awscli mode ([31661972](https://github.com/kalisio/kargo/commit/316619724221773596a40074b9fb04cea3942c40))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([65a3820e](https://github.com/kalisio/kargo/commit/65a3820e4b64ad351d0ee637e97ecc2c9461872a))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([d3ec1877](https://github.com/kalisio/kargo/commit/d3ec18779145163836e2913d2660caf02a221bdb))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([b9d08fed](https://github.com/kalisio/kargo/commit/b9d08fed0ba668ef23d63fc47cc58d047ec3fe6a))
*  MapProxy build is not working anymore [#68](https://github.com/kalisio/kargo/pull/68) ([9131a905](https://github.com/kalisio/kargo/commit/9131a905ec93b9563cddbcef96dffac0f4d4e9af))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([9f077a3d](https://github.com/kalisio/kargo/commit/9f077a3dca9295a0bad9790ef28ecb786ae10b69))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([d97a8371](https://github.com/kalisio/kargo/commit/d97a83710f10d16d7e7f0197dd3dafcb20717659))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([385fb5ec](https://github.com/kalisio/kargo/commit/385fb5ecda0cc2f22c858052ae670ed30e4e27f8))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([d0ff80a0](https://github.com/kalisio/kargo/commit/d0ff80a048300b434fafbb282ca69266bf7a4927))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([79f031d3](https://github.com/kalisio/kargo/commit/79f031d34b9fc2c54cb98488b06e21098349c9ad))
*  Test the deployment of Hyrax [#45](https://github.com/kalisio/kargo/pull/45) ([7a8c86f2](https://github.com/kalisio/kargo/commit/7a8c86f21d335a7687b3fb10436a845eea707c01))
*  Provide a script to simplify installation on workers ([#64](https://github.com/kalisio/kargo/pull/64)) ([3146857a](https://github.com/kalisio/kargo/commit/3146857a7b04dcc0260574673aab9c0bf8a0f539))
*  Provide a script to simplify installation on workers ([#64](https://github.com/kalisio/kargo/pull/64)) ([d95e3aff](https://github.com/kalisio/kargo/commit/d95e3aff76dd3c6ce6f55b30b3d9822cd8c39ef9))
*  Provide a script to simplify installation on workers ([#64](https://github.com/kalisio/kargo/pull/64)) ([9eebc13b](https://github.com/kalisio/kargo/commit/9eebc13b673098f9f6154907b00d1d1c5eb9e77b))
*  Provide a script to simplify installation on workers ([#64](https://github.com/kalisio/kargo/pull/64)) ([3caf8fe1](https://github.com/kalisio/kargo/commit/3caf8fe1b33cf7bac6a0a38586a233f50e3b6ed9))
*  Attempt to pull a newer image when building the services ([#62](https://github.com/kalisio/kargo/pull/62)) ([84d56d9b](https://github.com/kalisio/kargo/commit/84d56d9b0f2384fd386acdbb23408af17ce49565))
*  Provide a subcommand to update the services  ([#63](https://github.com/kalisio/kargo/pull/63)) ([0beb70a9](https://github.com/kalisio/kargo/commit/0beb70a9edab2f6c1b7c6325b035a705762d1ec5))
*  Provide a subcommand to update the services ([#63](https://github.com/kalisio/kargo/pull/63)) ([f3f751a1](https://github.com/kalisio/kargo/commit/f3f751a1e4bf85df2a9340d142f003f02be99e34))
*  Provide a subcommand to update the services ([#63](https://github.com/kalisio/kargo/pull/63)) ([a6746b6e](https://github.com/kalisio/kargo/commit/a6746b6edacbb33d80259db50c7b4a6a4b63451b))
*  Centralize default environment variables [#58](https://github.com/kalisio/kargo/pull/58) ([d738d8e3](https://github.com/kalisio/kargo/commit/d738d8e3936e213bbc647ea2a3d036dcd83b34a5))
*  Define default environment variables [#58](https://github.com/kalisio/kargo/pull/58) ([07661e26](https://github.com/kalisio/kargo/commit/07661e267e95032fc6eb82e04b3f4fdee0a5c83e))
*  default kano tag ([b2ae055f](https://github.com/kalisio/kargo/commit/b2ae055f004ff60de3b4d890a62c0f5c287bc636))
*  fixed typo in the mapserver.yml ([3fe435f4](https://github.com/kalisio/kargo/commit/3fe435f4b99ca1ac9e4c570e51353edf43f60e71))
*  Define default envrionment variables in the deploy files [#58](https://github.com/kalisio/kargo/pull/58) ([d8359c8b](https://github.com/kalisio/kargo/commit/d8359c8b0e4bb816e1221cb759d4834173b64542))
*  Provide MapServer deployement capabilities [#50](https://github.com/kalisio/kargo/pull/50) ([2d7cdcda](https://github.com/kalisio/kargo/commit/2d7cdcdaf8c848862564ac0d8061519ae98eeb15))
*  Provide MapServer deployement capabilities [#50](https://github.com/kalisio/kargo/pull/50) ([a743164e](https://github.com/kalisio/kargo/commit/a743164e26757623dd8f1d6fa1f5ca2fc4ee8c29))
*  Provide MapServer deployement capabilities [#50](https://github.com/kalisio/kargo/pull/50) ([98e1451d](https://github.com/kalisio/kargo/commit/98e1451d65c2d49db641bff7016ddd25f5ad315d))
*  Provide MapServer deployement capabilities [#50](https://github.com/kalisio/kargo/pull/50) ([55495e8c](https://github.com/kalisio/kargo/commit/55495e8cc707ed36e059c22d59953534fad38ae6))
*  Provide MapServer deployement capabilities [#50](https://github.com/kalisio/kargo/pull/50) ([3f88e3bd](https://github.com/kalisio/kargo/commit/3f88e3bdddf0d323b6fda539760c291de994b172))
*  Provide MapServer deployement capabilities [#50](https://github.com/kalisio/kargo/pull/50) ([3ec2957a](https://github.com/kalisio/kargo/commit/3ec2957afa9983bbd17a02fb4bd7b95c81658096))
*  Enhance the CLI [#53](https://github.com/kalisio/kargo/pull/53) ([2c3ed737](https://github.com/kalisio/kargo/commit/2c3ed7379070f8b0e4021c8db0c3525ea753991b))
*  Enhance the CLI [#53](https://github.com/kalisio/kargo/pull/53) ([5ac1ec21](https://github.com/kalisio/kargo/commit/5ac1ec21d9cd13397743820e8911d53140f65078))
*  Enhance the CLI [#53](https://github.com/kalisio/kargo/pull/53) ([841296b7](https://github.com/kalisio/kargo/commit/841296b7a0c779edcfecc0c3e718e7a6bbfe57e8))
*  Enhance the CLI [#53](https://github.com/kalisio/kargo/pull/53) ([85a69479](https://github.com/kalisio/kargo/commit/85a69479f7a7c335c08718018c3a8f42bb2d0a2e))
*  Enhance the CLI [#53](https://github.com/kalisio/kargo/pull/53) ([83d0bca6](https://github.com/kalisio/kargo/commit/83d0bca6a584426629128c48640956f46aa02018))
*  Enhance the CLI [#53](https://github.com/kalisio/kargo/pull/53) ([3b0e868d](https://github.com/kalisio/kargo/commit/3b0e868d1313c63265bd37bca3ba294c94cfa399))
*  Enhance CLI [#53](https://github.com/kalisio/kargo/pull/53) ([b1a10e8c](https://github.com/kalisio/kargo/commit/b1a10e8c36f6407acf986b309be05414e65734de))

### 0.2.0 (2019-04-21)

##### New Features

*  Add rolling update capabilities (close [#51](https://github.com/kalisio/kargo/pull/51)) ([ba5d63d3](https://github.com/kalisio/kargo/commit/ba5d63d31773f53f70020b63bc777a0154aaff00))
*  Add Healthcheck (close [#2](https://github.com/kalisio/kargo/pull/2)) ([bcaec290](https://github.com/kalisio/kargo/commit/bcaec29061e770014125eed1cdb655e3391356b9))
*  Remove experimental support of CesiumTerrainServer (close [#52](https://github.com/kalisio/kargo/pull/52)) ([d3dade9c](https://github.com/kalisio/kargo/commit/d3dade9c0730158b1154733bd094a9cae37911a6))
*  Create a build script for Kano (close [#49](https://github.com/kalisio/kargo/pull/49)) ([10da411e](https://github.com/kalisio/kargo/commit/10da411e0675756c9846a7fbf5c6c9288d50cebd))
*  added openaq support (close [#42](https://github.com/kalisio/kargo/pull/42)) ([26e7dda7](https://github.com/kalisio/kargo/commit/26e7dda7892d444eac95c7b879be698f9da73b2c))
*  build command should rely on the merged configuration (close [#41](https://github.com/kalisio/kargo/pull/41)) ([f543f6ed](https://github.com/kalisio/kargo/commit/f543f6ed97a3baf547541bf5c739bd5abb39cff1))
*  the command make should copy the build directory of a workspace too (close [#40](https://github.com/kalisio/kargo/pull/40)) ([8b09d22d](https://github.com/kalisio/kargo/commit/8b09d22d580d9bc416c36213c8da7ba4b6a30346))
*  the command make should copy the build directory of a workspace too (close [#40](https://github.com/kalisio/kargo/pull/40)) ([c424fb4d](https://github.com/kalisio/kargo/commit/c424fb4d406877692563eac6cdda6718212a8034))

##### Bug Fixes

*  Mapproxy build does not work any more (close [#47](https://github.com/kalisio/kargo/pull/47)) ([65a07fcf](https://github.com/kalisio/kargo/commit/65a07fcf60fd0d649913633587ed569259cecf63))

##### Other Changes

*  Add Healthcheck [#2](https://github.com/kalisio/kargo/pull/2) ([dd4becb3](https://github.com/kalisio/kargo/commit/dd4becb308f12f414917a9af84d2fe88fde246c1))
*  Add Healthcheck [#2](https://github.com/kalisio/kargo/pull/2) ([94e45f29](https://github.com/kalisio/kargo/commit/94e45f291803f5b287b19fd37e3f70126dc86165))
*  [#49](https://github.com/kalisio/kargo/pull/49) ([1de790dc](https://github.com/kalisio/kargo/commit/1de790dcb609f3d8b5bfe8a27b49a09a7238dff4))

### 0.1.0 (2019-02-08)

First release


