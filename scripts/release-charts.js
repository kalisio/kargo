const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const yesno = require('yesno')
const simpleGit = require("simple-git")
const git = simpleGit.default()


async function processChart (update, chart) {
  const chartFile = path.join(chart, 'Chart.yaml')
  const content = yaml.load(fs.readFileSync(chartFile, 'utf8'))
  let versionArray = content.version.split('.')
  switch (update) {
    case 'major':
      versionArray[0] = String(Number(versionArray[0]) + 1)
      versionArray[1] = '0'
      versionArray[2] = '0'
      break;
    case 'minor':
      versionArray[1] = String(Number(versionArray[1]) + 1)
      versionArray[2] = '0'
      break;
    default:
      versionArray[2] = String(Number(versionArray[2]) + 1)
  }
  const versionString = versionArray.join('.')
  content.version = versionString
  fs.writeFileSync(chartFile, yaml.dump(content))
  console.log(`Bump %s version to %s`, chart, versionString)
  await git.commit()
}

async function processChartGlob (update, pattern) {
  const charts = glob.sync(pattern)
  if (charts.length === 0) {
    console.error('No charts found. Have you defined a correct pattern ?')
  } else {
    console.log('Found the following charts:\n', charts.join('\n '))
    const ok = await yesno({
      question: 'Are you sure you want to continue ?'
    })
    if (ok) for (let i = 0; i < charts.length; i++) await processChart(update, charts[i])
  }
}

async function execute (update, pattern) {
  const status = await git.status()
  if (!status.isClean()) {
    console.error('Git status is not clean ! Please clean it.')
    return
  }
  processChartGlob(update, pattern)
}


execute(process.argv[2], path.join('charts', process.argv[3]))
//console.log(helmVersion(process.argv[2], process.argv[3]));