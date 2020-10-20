#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const fs = require('fs')
const shell = require('shelljs')
const _ = require('lodash')
const jsondiffpatch = require('jsondiffpatch')
const envsub = require('envsub')
const makeDebug = require('debug')
const debug = makeDebug('kargo')

const defaultsFile = path.join('.', 'defaults.json')
const deployDir = 'deploy'
const configsDir = 'configs'
const scriptsDir = 'scripts'
const runtimeDir = '.kargo'
const runtimeDeployDir = path.join(runtimeDir, deployDir)
const runtimeConfigsDir = path.join(runtimeDir, configsDir)
const runtimeScriptsDir = path.join(runtimeDir, scriptsDir)
const runtimeStatesFile = path.join(runtimeDir, 'states.json')
const workspaceConfigFileName = 'config.json'
let workspaceDir = null
let workspaceDeployDir = null
let workspaceConfigsDir = null
let workspaceScriptsDir = null
let workspaceConfigFile = null

const defaults = JSON.parse(fs.readFileSync(defaultsFile))
let states = null
let config = null

shell.config.silent = true
shell.config.fatal = true

function log (message, type = 'info') {
  let color = '\x1b[0m'
  switch (type) {
    case 'error': 
      color = '\x1b[31m'
      break
    case 'warn': 
      color = '\x1b[33m'
      break
    default:
  }
  console.error('%s[kargo] %s\x1b[0m', color, message)
}

function readStates () {
  debug('[function] readStates')
  try {
    states =  JSON.parse(fs.readFileSync(runtimeStatesFile))
  } catch (error) {
    log('It looks like you have not selected any workspace. You must select a worksapce using the command \'use\'', 'error')
    return false
  }
  const workspace = _.get(states, 'workspace', null)
  if (!workspace) {
    log('It looks like the states file is corrupted. Did you select a worksapce using the command \'use\'', 'error')
    return false
  } 
  workspaceDir = workspace.path
  workspaceConfigFile = path.join(workspaceDir, workspaceConfigFileName)
  workspaceDeployDir = path.join(workspaceDir, deployDir)
  workspaceConfigsDir = path.join(workspaceDir, configsDir)
  workspaceScriptsDir = path.join(workspaceDir, scriptsDir)
  return true
}

function writeStates () {
  try {
    fs.writeFileSync(runtimeStatesFile, JSON.stringify(states,  undefined, 2))
  } catch (error) {
    log(error, 'error')
    return false
  }
  return true
}

function readConfig () {
  debug('[function] readConfig')
  // Read the states
  if (!readStates()) return false
  try {
    config = JSON.parse(fs.readFileSync(workspaceConfigFile))
  } catch (error) {
    log(error, 'error')
    return null
  }
  // Update the configuration using default values and substitute the value for each properties if needed
  let errorOccured = false
  _.forEach(config.stacks, stack => {
    _.forEach(_.toPairs(stack), service => {
      _.defaults(service[1], _.get(defaults, service[0]))
      _.forEach(_.toPairs(service[1]), settings => {
        try {
          _.set(service[1], settings[0], _.template(settings[1])(config.environment))
        } catch (error) {
          log(error, 'error')
          errorOccured = true
          return false // exit iteration
        }
      })
      if (errorOccured) return false // exit iteration
    })
    if (errorOccured) return false // exit iteration
  })
  if (errorOccured) {
    log('An error has occured while reading the configuration', 'error')
    config = null
    return false
  }
  return true
}

function diffConfig () {
  debug('[function] diffConfig')
  if (!readConfig()) return null
  // Compute the difference between the configuration and the runtime configuration
  const runtimeConfig = _.get(states, 'config', undefined)
  return jsondiffpatch.diff(runtimeConfig, config)
}

/*function writeConfig () {
  try {
    fs.writeFileSync(runtimeConfigFile, JSON.stringify(config, undefined, 2))
  } catch (error) {
    log(error, 'error')
    return false
  }
  return true
}*/

function listEnvironment () {
  let variables = []
  _.forEach(_.toPairs(config.environment), variable => {
    variables.push({ name: variable[0], value: variable[1]})
  })
  return variables
}

function listStacks () {
  return _.keys(config.stacks)
}

function listServices (stack) {
  let services = []
  _.forEach(_.toPairs(config.stacks[stack]), service => {
    services.push({ name: service[0], settings: service[1]})
  })
  return services
}

async function deployStack (stack) {
  log('Deploying \'' + stack + '\' stack')
  let stackDeployFiles = []
  _.forEach(listServices(stack), service => {
    let serviceDeployFiles = deployService(service)
    if (serviceDeployFiles.length === 0) return false
    console.log(serviceDeployFiles)
    stackDeployFiles = _.concat(stackDeployFiles, serviceDeployFiles)
  })
  console.log(stackDeployFiles)
  return true
}

async function deployService (service) {
  // Update environement 
  let serviceNamePrefix = _.toUpper(_.snakeCase(service.name))
  _.forEach(_.toPairs(service.settings), settings => {
    shell.env[serviceNamePrefix + '_' + _.toUpper(_.snakeCase(settings[0]))] = settings[1]
  })
  // Update config files
  let serviceConfigDir = path.join('configs', service.name)
  if (fs.existsSync(serviceConfigDir)) shell.cp('-Ru', serviceConfigDir, runtimeConfigsDir)
  if (fs.existsSync(path.join(states.workspace.path, serviceConfigDir))) shell.cp('-Ru', path.join(states.workspace.path, serviceConfigDir), runtimeConfigsDir)
  // Updated config template file
  const templateFilesFilter = '.*\.tpl'
  const templateFiles = shell.find(path.join(runtimeConfigsDir, service.name)).filter(file => file.match(templateFilesFilter))
  //const envsubOptions = 
  _.forEach(templateFiles, file => {
    //await substituteFile()
  })
  // Update default deploy file
  let deployFiles = [ service.name + '.yml' ]
  shell.cp(path.join(deployDir, deployFiles[0]), path.join(runtimeDeployDir, deployFiles[0]))
  // Updated extention files
  const extensionFilesFilter = service.name + '-.*\.yml'
  let extensionFiles = shell.find(path.join(states.workspace.path, deployDir)).filter(file => file.match(extensionFilesFilter))
  _.forEach(extensionFiles, file => {
    let extentionFile =  path.basename(file)
    shell.cp(file, path.join(runtimeDeployDir, extentionFile))
    deployFiles.push(extentionFile)
  })
  return deployFiles
}

async function apply () {
  debug('[subcommand] apply')
  // Compute the difference
  let delta = diffConfig()
  if (!delta) return
  // Apply the difference on labels
  let labels = _.get(delta, 'labels', undefined)
  _.forEach(_.toPairs(labels), node => {
    if (node[1].length > 2 ) {
      console.log('remove labels ' + node[1] + ' on node ' + node[0])

    } else if (node[1].length > 1) {
      console.log('update node ' + node[0] + ' with labels ' + node[1])
    } else {
      console.log('add labels ' + node[1] + ' on node ' + node[0])
    }
  })
  // Apply the difference on stacks
  let stacks = _.get(delta, 'stacks', undefined)
  _.forEach(_.toPairs(stacks), stack => {
    console.log(stack[0] + ' must be updated')
  })
  // Update the script files
  shell.rm('-rf', runtimeScriptsDir);
  shell.cp('-R', scriptsDir, runtimeScriptsDir)
  if (fs.existsSync(workspaceScriptsDir)) shell.cp('-R', path.join(workspaceScriptsDir, '*'), runtimeScriptsDir)


  // Override the runtime configuration 
  //_.set(states, 'config', config)
  //writeStates()
}

async function deploy (stackOrAll) {
  debug('[subcommand] deploy')
  if (!readConfig()) return
  
  
    /*if (writeConfig()) {
      _.forEach(listEnvironment(), variable => {
        shell.env[_.toUpper(_.snakeCase(variable.name))] = variable.value
      })
      _.forEach(listStacks(), stack => {
        if (stackOrAll === 'all' || stackOrAll === stack) await deployStack(stack)
      })
    }
  }*/
}

function exec () {
  debug('[subcommand] exec')
  if (readConfig()) {
  }
}

function info () {
  debug('[subcommand] info')
  if (readConfig()) {
    _.forEach(listStacks(), stack => {
      console.log('- %s', stack)
      _.forEach(listServices(stack), service => {
        console.log('  - %s', service.name)
        _.forEach(_.toPairs(service.settings), settings => {
          console.log('    - %s: %s', settings[0], settings[1])
        })
      })
    })
  }
}

function plan () {
  debug('[subcommand] plan')
  let delta = diffConfig()
  if (!delta) return
  console.log(jsondiffpatch.formatters.console.format(delta))
}

function pull () {
  debug('[subcommand] pull')
  if (!readStates()) return false
  shell.cd(workspaceDir)
  if (shell.exec('git pull').code !== 0) {
    log('An error has occured while pulling ' + workspaceDir, 'error')
  }
}

function use (workspace) {
  // TODO check states
  if (!fs.existsSync(workspace)) {
    log('The workspsace \'' + workspace + '\' does not exist', 'error')
    return
  }
  _.set(states, 'workspace', { name: path.basename(workspace), path: workspace })
  if (writeStates()) {
    shell.mkdir('-p', runtimeDeployDir)
    shell.mkdir('-p', runtimeConfigsDir)
    shell.mkdir('-p', runtimeScriptsDir)
    log('Switched to \'' + states.workspace.name + '\'')
  }
}

program
  .version(require('./package.json').version)
program
  .command('apply')
  .action(() => apply())
program
  .command('deploy <stack|all>')
  .action((stack) => deploy(stack))  
program
  .command('exec <script>')
  .action((script) => exec(script))
program
  .command('info')
  .action(() => info())
program
  .command('plan')
  .action(() => plan())
program
  .command('pull')
  .action(() => pull())
program
  .command('use <workspace>')
  .action((workspace) => use(workspace))
  
 program.parse(process.argv)


