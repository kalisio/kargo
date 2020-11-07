const _ = require('lodash');
const logger = require('express-gateway/lib/logger').createLoggerWithLabel('[EG:populate]');
const adminClient = require('express-gateway/admin')({
  baseUrl: 'http://localhost:9876',
  verbose: false,
  headers: null
});
const consumers = require('../var/lib/eg/consumers.config');

async function processScopes(oldScopes, newScopes) {
  logger.info('process scopes: [' + oldScopes + '] to [' + newScopes + ']');
  // Remove undefined old scopes
  for (let i = 0; i < oldScopes.length; ++i) {
    const oldScope = oldScopes[i];
    if (!newScopes.includes(oldScope)) {
      logger.info('remove scope ' + oldScope);
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
      logger.info('create user ' + userName);
      await createUser(userName, apps);
    } else {
      logger.info('user ' + userName + ' already exists: ' + user.id);
      await processApps(user.id, apps);
    }
  }
}

async function createUser(newUserName, newApps) {
  let user_data = { username: newUserName };
  let user = await adminClient.users.create(user_data);
  logger.info(newUserName + ' created [' + user.id + ']')
  for (const [newAppName, newCredential] of Object.entries(newApps)) {
    await createApp(user.id, newAppName, newCredential);
  }
}

async function processApps(userId, newApps) {
  logger.info('process apps: ' + Object.keys(newApps));
  let result = await adminClient.apps.list({ userId: userId });
  let oldApps = result.apps || [];
  logger.info('existing apps: ' + oldApps);
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
  for (const [newAppName, newAppData] of Object.entries(newApps)) {
    let oldApp = _.find(oldApps, { 'name': newAppName });
    if (oldApp === undefined) {
      logger.info('create app ' + newAppName + ' ...');
      await createApp(userId, newAppName, newAppData);
    } else {
      logger.info('process app ' + newAppName + ' ...')
      // must check whether the scopes of credential changed. If yes we need to create a new app
      const result = await adminClient.credentials.list(oldApp.id); 
      const oldCredential = _.get(result, 'credentials[0]', []);
      const newCredential =_.get(newAppData, 'credential', []);
      let oldScopes = _.sortBy(_.split(oldApp.scopes, ','));
      let newScopes = _.sortBy(newAppData.scopes);
      if (!_.isEqual(oldScopes, newScopes) || (oldCredential.type !== newCredential.type)) {
        logger.info (newAppName + ' need to be recreated ...');
        await adminClient.apps.remove(oldApp.id);
        await createApp(userId, newAppName, newAppData);
      } else logger.info(newAppName + ' is ok');
    }
  }
}

async function createApp(userId, appName, appData) {
  logger.debug('create app ' + appName);
  let app_data = { name: appName, scopes: _.get(appData, 'scopes', []) };
  let app = await adminClient.apps.create(userId, app_data);
  let credential;
  if (appData.credential.type === 'basic-auth') {
    credential = await adminClient.credentials.create(app.id, appData.credential.type, { password: appData.credential.password });
  } else {
    credential = await adminClient.credentials.create(app.id, appData.credential.type, { keyId: appData.credential.keyId, keySecret: appData.credential.keySecret });
  }
  if (appData.scopes) {
    await adminClient.credentials.setScopes(credential.id, appData.credential.type, appData.scopes);
  }
  logger.info(appName + ' created [' + app.id + ']');
}

module.exports = {
  version: '1.2.0',
  policies: [],
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
