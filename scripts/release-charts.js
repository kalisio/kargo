const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const yesno = require('yesno')
const simpleGit = require("simple-git")
const git = simpleGit.default()


async function processChart (update, chart) {
  const chartFile = path.join(chart, 'Chart.yaml')
  const chartName = path.basename(chart)
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
  const message = `Bump ${chartName} version to ${versionString}`
  console.log(message)
  await git.add(chartFile)
  return message
}

async function processChartGlob (update, chartDir, charPattern) {
  const globPattern = path.join(chartDir, charPattern)
  const charts = glob.sync(globPattern)
  if (charts.length === 0) {
    console.error('No charts found. Have you defined a correct pattern ?')
    return
  }

  console.log(`About to perform a new ${update} release for the following charts:`)
  const chartNames = []
  charts.forEach(chart => {
    chart = path.basename(chart)
    console.log(' ', chart)
    chartNames.push(chart)
  })

  if (await yesno({ question: 'Are you sure you want to continue ?' })) {
    const commitBody = []
    for (let i = 0; i < charts.length; i++) {
      commitBody.push(await processChart(update, charts[i]))
    }
    // Ask Travis to pack charts
    commitBody.push(`[pack ${chartNames.join(',')}]`)
    const commitHeader = `chore: charts ${update} release`
    await git.commit([commitHeader, commitBody.join('\n')])
    await git.push()
  }
}

processChartGlob(process.argv[2], process.argv[3], process.argv[4])
