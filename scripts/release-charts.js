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
  console.log(`Bump %s version to %s`, path.basename(chart), versionString)
  await git.add(chartFile)
  await git.commit(`chore: bump charts version to ${versionString} [pack ${path.basename(chart)}]`)
  await git.push()
}

async function processChartGlob (update, chartDir, charPattern) {
  const globPattern = path.join(chartDir, charPattern)
  const charts = glob.sync(globPattern)
  if (charts.length === 0) {
    console.error('No charts found. Have you defined a correct pattern ?')
  } else {
    console.log('Found the following charts:')
    charts.forEach(chart => {
      chart = path.basename(chart)
      console.log(' ', chart)
    })
    const ok = await yesno({
      question: 'Are you sure you want to continue ?'
    })
    if (ok) for (let i = 0; i < charts.length; i++) {
      await processChart(update, charts[i])      
    }
  }
}

processChartGlob(process.argv[2], process.argv[3], process.argv[4])
