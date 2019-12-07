const _ = require('lodash');
const fs = require('fs');
const logger = require('express-gateway/lib/logger').createLoggerWithLabel('[EG:plugin-populate]');
const adminClient = require('express-gateway/admin')({
  baseUrl: 'http://localhost:9876',
  verbose: false,
  headers: null
});


const consumers = JSON.parse(fs.readFileSync('/var/lib/eg/consumers.config.json'));

async function processScopes(oldScopes, newScopes) {
  logger.info('process scopes: [' + oldScopes + '], [' + newScopes + ']');
  // Remove undefined old scopes
  for (let i = 0; i < oldScopes.length; ++i) {
    const oldScope = oldScopes[i];
    if (!newScopes.includes(oldScope)) {
      logger.info('delete scope ' + oldScope);
      await adminClient.scopes.remove(oldScope);
    }
  }
  // create undefined new scopes
  for (let i = 0; i < newScopes.length; ++i) {
    const newScope = newScopes[i];
    if (!oldScopes.includes(newScope)) {
      logger.info('add scope ' + newScope);
      await adminClient.scopes.create([newScope]);
    }
  }
}

async function processUsers(oldUsers, newUsers) {
  logger.debug('process users:');
  // delete undefined old users
  const newUserNames = Object.keys(newUsers);
  for (let i = 0; i < oldUsers.length; ++i) {
    const oldUser = oldUsers[i]
    if (!newUserNames.includes(oldUser.username)) {
      logger.info('delete user ' + oldUser.username)
      await adminClient.users.remove(oldUser.id)
    }
  }
  // process new users
  for (const [userName, apps] of Object.entries(newUsers)) {
    let user = _.find(oldUsers, { 'username': userName });
    if (user === undefined) {
      logger.info('add user ' + userName);
      await createUser(username, apps);
    } else {
      logger.info('process user ' + userName);
      await processApps(user.id, apps);
    }
  }
}

async function createUser(newUserName, newApps) {
  let user_data = { username: newUserName };
  let user = await adminClient.users.create(user_data);
  for (const [newAppName, newCredential] of Object.entries(newApps)) {
    await createApp(user.id, appName, credential);
  }
}

async function processApps(userId, newApps) {
  let result = await adminClient.apps.list({ userId });
  let oldApps = result.apps || [];
  let newAppsNames = Object.keys(newApps)
  // delete undefined old apps
  for (let i = 0; i < oldApps.length; ++i) {
    const oldApp = oldApps[i]
    if (!newAppsNames.includes(oldApp.name)) {
      logger.info('delete app ' + oldApp.name)
      await adminClient.apps.remove(oldApp.id)
    }
  }
  // process new apps
  for (const [appName, credential] of Object.entries(newApps)) {
    let app = _.find(oldApps, { 'name': appName });
    if (app === undefined) {
      logger.info('create app ' + appName);
      await createApp(userId, appName, credential);
    } else {
      logger.info('process app ' + appName)
      await processCredential(userId, app.id, credential)
    }
  }

}

async function createApp(userId, appName, credential) {
  logger.debug('create app ' + appName);
  let app_data = { name: app, scopes: credential.scopes };
  let app = await adminClient.apps.create(userId, app_data);
  await createCredential(app.id, credential)
}

async function processCredential(userId, appId, newCredential) {
  let result = await adminClient.credentials.list(appId);
  let oldCredential = _.get(result, 'credentials[0]')
  if (!oldCredential) throw new Error('Unconsistent application ' + appId + ': cannot find any credential')
  logger.debug('process credential: ' + oldCredential.type + ', ' + newCredential.type)
  if (!oldCredential.type !== newCredential.type) {
    logger.debug('deactivate old credential of type ' + oldCredential.type)
    await adminClient.credentials.deactivate(oldCredential.id, oldCredential.type);
    await createCredential(appId, newCredential)
  } else {
    await setScopes(oldCredential.id, oldCredential.type, newCredential.scopes || []);
  }
}

async function createCredential(consumerId, credential) {
  logger.debug('create credential of type ' + credential.type );
  let result;
  if (credential.type === 'basic-auth') {
    result  = await adminClient.credentials.create(consumerId, credential.type, { id: 'toto', password: credential.password });
  } else {
    result  = await adminClient.credentials.create(consumerId, credential.type, { keyId: credential.keyId, keySecret: credential.keySecret });
  }
  await setScopes(result.id, credential.type, credential.scopes || []);
}

async function setScopes(credentialId, credentialType, scopes) {
  logger.debug('set scopes [' + scopes + ']');
  await adminClient.credentials.setScopes(credentialId, credentialType, scopes);
}

module.exports = {
  version: '1.2.0',
  init: function (pluginContext) {
    pluginContext.eventBus.on('admin-ready', async function ({ adminServer }) {
      const oldScopes = await adminClient.scopes.list({});
      await processScopes(oldScopes.scopes || [], consumers.scopes);
      const oldUsers = await adminClient.users.list({});
      await processUsers(oldUsers.users || {}, consumers.users);
    })
  },
  schema: {
    $id: 'http://express-gateway.io/plugins/populate.json',
  }
};
