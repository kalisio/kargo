#!/usr/bin/env node

const program = require('commander')
const path = require('path')
const fs = require('fs')
const shell = require('shelljs')
const _ = require('lodash')
const jsondiffpatch = require('jsondiffpatch')
const jsondiffpatchInstance = require('jsondiffpatch').create({ textDiff: { minLength: 999 } })
const envsub = require('envsub')
const makeDebug = require('debug')
const debug = makeDebug('kargo')

const deployDir = 'deploy'
const configsDir = 'configs'
const scriptsDir = 'scripts'

const defaults = JSON.parse(fs.readFileSync(path.join('.', 'defaults.json')))

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

function getRuntimeElementPath (element) {
  const runtimeDir = '.kargo'
  switch (element) {
    case 'deployDir': 
      return path.join(runtimeDir, deployDir)
    case 'configsDir':
      return path.join(runtimeDir, configsDir)
    case 'scriptsDir': 
      return path.join(runtimeDir, scriptsDir)
    case 'statesFile': 
      return path.join(runtimeDir, 'states.json')
    default:
  }
  return runtimeDir
}

function getWorkspaceElementPath (element) {
  const workspaceDir = _.get(states, 'workspace.path')
  switch (element) {
    case 'deployDir': 
      return path.join(workspaceDir, deployDir)
    case 'configsDir':
      return path.join(workspaceDir, configsDir)
    case 'scriptsDir': 
      return path.join(workspaceDir, scriptsDir)
    case 'configFile': 
      return path.join(workspaceDir, _.get(states, 'workspace.configFile'))
    default:
  }
  return workspaceDir
}

function readStates () {
  debug('(readStates)')
  // Read the states file
  try {
    states =  JSON.parse(fs.readFileSync(getRuntimeElementPath('statesFile')))
  } catch (error) {
    log('It looks like you haven\'t selected any workspace', 'error') 
    log('You must select a worksapce using the command \'use\'')
    return false
  }
  // Ensures the workspace is correct
  const workspace = _.get(states, 'workspace', null)
  if (!workspace) {
    log('It looks like the states file is corrupted', 'error')
    log('Did you select a worksapce using the command \'use\' ?')
    return false
  } 
  return true
}

function writeStates () {
  debug('(writeStates)')
  try {
    fs.writeFileSync(getRuntimeElementPath('statesFile'), JSON.stringify(states,  undefined, 2))
  } catch (error) {
    log(error, 'error')
    return false
  }
  return true
}

function getStates() {
  debug('(getStates)')
  if (states) return true
  return readStates()
}

function readConfig () {
  debug('(readConfig)')
  if (!getStates()) return false
  try {
    config = JSON.parse(fs.readFileSync(getWorkspaceElementPath('configFile')))
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

function getConfig() {
  debug('(getConfig)')
  if (config) return true
  return readConfig()
}

function diffConfig () {
  debug('(diffConfig)')
  if (!getConfig()) return null
  // Compute the difference between the configuration and the runtime configuration
  const runtimeConfig = _.get(states, 'config', undefined)
  return jsondiffpatchInstance.diff(runtimeConfig, config)
}

function setEnvironment () {
  debug('(setEnvironment)')
  if (!readStates()) return false
  _.forEach(_.toPairs(states.config.environment), variable => {
    shell.env[_.toUpper(_.snakeCase(variable[0]))] = variable[1]
  })
  return true
}

async function deployService (service, properties) {
  debug('(deployService) ' + service)
  // Update environement 
  /*let serviceNamePrefix = _.toUpper(_.snakeCase(service.name))
  _.forEach(_.toPairs(service.settings), settings => {
    shell.env[serviceNamePrefix + '_' + _.toUpper(_.snakeCase(settings[0]))] = settings[1]
  })*/
  // Update config files
  const serviceConfigDir = path.join('configs', service)
  if (fs.existsSync(serviceConfigDir)) shell.cp('-Ru', serviceConfigDir, getRuntimeElementPath('configsDir'))
  const workspaceServiceConfigsDir = path.join(getWorkspaceElementPath('configsDir'), service)
  if (fs.existsSync(workspaceServiceConfigsDir)) shell.cp('-Ru', workspaceServiceConfigsDir, getRuntimeElementPath('configsDir'))
  // Updated config template file
  //const templateFilesFilter = '.*\.tpl'
  //const templateFiles = shell.find(path.join(runtimeConfigsDir, service.name)).filter(file => file.match(templateFilesFilter))
  //const envsubOptions = 
  //_.forEach(templateFiles, file => {
    //await substituteFile()
  //})
  // Update default deploy file
  let deployFiles = []
  /*const serviceDeployFile = 
  shell.cp(path.join(deployDir, deployFiles[0]), path.join(runtimeDeployDir, deployFiles[0]))
  // Updated extention files
  const extensionFilesFilter = service.name + '-.*\.yml'
  let extensionFiles = shell.find(path.join(states.workspace.path, deployDir)).filter(file => file.match(extensionFilesFilter))
  _.forEach(extensionFiles, file => {
    let extentionFile =  path.basename(file)
    shell.cp(file, path.join(runtimeDeployDir, extentionFile))
    deployFiles.push(extentionFile)
  })*/
  return deployFiles
}

function removeService (service) {
  debug('(removeService) ' + service)
  log('Removing service \'' + service + '\'')
  // Remove configs dir if any
  const runtimeServiceConfigsDir = path.join(getRuntimeElementPath('configsDir'), service)
  if (fs.existsSync(runtimeServiceConfigsDir)) shell.rm('-rf', runtimeServiceConfigsDir)
  // Remove deploy files
  const deployFilesFilter = service.name + '.*\.yml'
  let deployFiles = shell.find(path.join(getRuntimeElementPath('deployDir'))).filter(file => file.match(deployFilesFilter))
  _.forEach(deployFiles, deployFile => shell.rm(deployFile))
  return true
}

function deployStack (stack, services) {
  debug('(deployStack) ' + stack)
  log('Deploying stack \'' + stack + '\'')
  let stackDeployFiles = []
  let errorOccured = false
  _.forEach(_.toPairs(services), pair => {
    let serviceDeployFiles = deployService(pair[0], pair[1])
    if (serviceDeployFiles.length === 0) {
      errorOccured = false
      return false
    }
    stackDeployFiles = _.concat(stackDeployFiles, serviceDeployFiles)
  })
  if (errorOccured) return []
  console.log(stackDeployFiles)
  return stackDeployFiles
}

function removeStack (stack, services) {
  debug('(removeStack) ' + stack)
  log('Removing stack \'' + stack + '\'')
  let errorOccured = false
  _.forEach(_.toPairs(services), pair => {
    if (!removeService(pair[0])) {
      errorOccured = true
      return false // exit iteration
    }
  })
  if (errorOccured) return false
  //console.log(stackDeployFiles)
  return true
}

function updateStack (stack, delta) {
  debug('(updateStack) ' + stack + ' ' + delta)
  if (delta.length === 3) {
    log('Remove ' + stack)
    return removeStack(stack, delta[0])
  }
  if (delta.length === 1) {
    log('Add ' + stack)
    return deployStack(stack, delta[0])
  }
  log('Update ' + stack)
  if (!removeStack(stack, delta[0])) return false
  return deployStack(stack, delta[1])
}

function updateLabels (node, delta) {
  debug('(updateLabels) ' + node + ' ' + delta)
  const labels = ''
  if (delta.length === 3) {
    log('Removing labels ' + delta[0] + ' from node ' + node)
  } else if (delta.length === 1) {
    log('Adding labels ' + delta[0] + ' to node ' + node)
    labels = delta[0]
  } else {
    log('Updating node ' +  node + ' with labels ' + delta[1])
    labels = delta[1]
  }
  const command = './scripts/update-labels.sh ' + node + '"' + labels + '"'
 /* if (shell.exec(command).code!==0) {
    log('An errror has occcured while upating labels on node \'' + node + '\'', 'error')
    return false
  } */
  return true
}

async function apply () {
  debug('[apply]')
  // Compute the difference
  let delta = diffConfig()
  if (!delta) return
  // Override the runtime configuration 
  _.set(states, 'config', config)
  // Apply the difference on labels
  let errorOccured = false
  let labels = _.get(delta, 'labels', undefined)
  _.forEach(_.toPairs(labels), pair => {
    if (!updateLabels(pair[0], pair[1])) {
       errorOccured = true
       return false
    }
  })
  if (errorOccured) return
  // Apply the difference on stacks
  let stacks = _.get(delta, 'stacks', undefined)
  _.forEach(_.toPairs(stacks), pair => {
    if (!updateStack(pair[0], pair[1])) {
      errorOccured = true
      return false
    }
  })
  if (errorOccured) return
  // Update the script files
  shell.rm('-rf', getRuntimeElementPath('scriptsDir'));
  shell.cp('-R', scriptsDir, getRuntimeElementPath('scriptsDir'))
  if (fs.existsSync(getWorkspaceElementPath('scriptsDir'))) {
    shell.cp('-R', path.join(getWorkspaceElementPath('scriptsDir'), '*'), getRuntimeElementPath('scriptsDir'))
  }
  // Override the runtime configuration 
  //_.set(states, 'config', config)
  writeStates()
}

function exec (script) {
  debug('[exec]')
  if (!setEnvironment()) return false
  let scriptFile = path.join(getRuntimeElementPath('scriptsDir'), script)
  if (!fs.existsSync(scriptFile)) {
    log('The specified script file \'' + script + '\' does not exist', 'error')
    return
  }
  if (shell.exec(scriptFile).code!==0) {
    log('An error has occured while executing \'' + script + '\'', 'error')
  }
}

function info () {
  debug('[info]')
  if (!readStates()) return false
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

function plan () {
  debug('[plan]')
  let delta = diffConfig()
  if (!delta) return
  jsondiffpatch.formatters.console.log(delta)
}

function pull () {
  debug('[pull]')
  if (!getStates()) return false
  shell.pushd(workspaceDir)
  if (shell.exec('git pull').code!==0) {
    log('An error has occured while pulling ' + workspaceDir, 'error')
  }
  shell.popd()
  plan()
}

function use (workspaceConfigFile) {
  debug('[use] ' + workspaceConfigFile)
  // Check whether the specified path exists
  if (!fs.existsSync(workspaceConfigFile)) {
    log('The file \'' + workspaceConfigFile + '\' does not exist', 'error')
    return
  }
  // Ensure the runtime structure exists
  shell.mkdir('-p', getRuntimeElementPath())
  shell.mkdir('-p', getRuntimeElementPath('deployDir'))
  shell.mkdir('-p', getRuntimeElementPath('configsDir'))
  shell.mkdir('-p', getRuntimeElementPath('scriptsDir'))
  // Configure the states  
  states = {
    'workspace': { 
      'name': path.parse(path.basename(workspaceConfigFile)).name, 
      'path': path.dirname(workspaceConfigFile),
      'configFile': path.basename(workspaceConfigFile)
    },
    'config': { environment: {}, labels: {}, stacks: {} }
  }
  // Save the states
  if (writeStates()) {
    log('Switched to \'' + states.workspace.name + '\'')
  }
  plan()
}

program
  .version(require('./package.json').version)
program
  .command('apply')
  .action(() => apply())
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


