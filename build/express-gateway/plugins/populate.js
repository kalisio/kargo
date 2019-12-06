const fs = require('fs');
const _ = require('lodash');

const adminClient = require('express-gateway/admin')({
  baseUrl: 'http://localhost:9876',
  verbose: false,
  headers: null
});

const consumers = JSON.parse(fs.readFileSync('/var/lib/eg/consumers.config.json'));

async function processScopes(oldScopes, newScopes) {
  
  // Remove undefined old scopes
  for (let i = 0; i < oldScopes.length; ++i) {
    const oldScope = oldScopes[i];
    if (!newScopes.includes(oldScope)) {
      console.log('Removing scope ' + oldScope);
      await adminClient.scopes.remove(oldScope);
    }
  }
  // create undefined new scopes
  for (let i = 0; i < newScopes.length; ++i) {
    const newScope = newScopes[i];
    if (!oldScopes.includes(newScope)) {
      console.log('Addind scope ' + newScope);
      await adminClient.scopes.create([newScope]);
    }
  }
}

async function processUsers(oldUsers, newUsers) {
  // delete undefined old users
  const newUserNames = Object.keys(newUsers);
  for (let i = 0; i < oldUsers.length; ++i) {
    const oldUser = oldUsers[i]
    if (!newUserNames.includes(oldUser.username)) {
      console.log('Removing user ' + oldUser.username)
      await adminClient.users.remove(oldUser.id)
    }
  }
  // process new users
  for (const [userName, apps] of Object.entries(newUsers)) {
    let user = _.find(oldUsers, { 'username': userName });
    if (user === undefined) {
      console.log('Adding user ' + userName)
      await createUser(username, apps)
    } else {
      console.log('Processing user ' + userName)
      await processApps(user.id, apps)
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
      console.log('Removing app ' + oldApp.name)
      await adminClient.apps.remove(oldApp.id)
    }
  }
  // process new apps
  for (const [appName, credential] of Object.entries(newApps)) {
    let app = _.find(oldApps, { 'name': appName });
    if (app === undefined) {
      console.log('Adding app ' + appName);
      await createApp(userId, appName, credential);
    } else {
      console.log('Procesing app ' + appName)
      await processApp(userId, app.id, credential)
    }
  }

}

async function createApp(userId, appName, credential) {
  let app_data = { name: app, scopes: credential.scopes }
  let app = await adminClient.apps.create(userId, app_data)
  await createCredential(app.id, credential)
}

async function processApp(userId, appId, credential) {

}


async function createCredential(consumerId, credential) {
  let result;
  if (credential.type === 'basic-auth') {
    result  = await admin.credentials.create(consumerId, credential.type, { password: credential.password });
  } else {
    result  = await admin.credentials.create(consumerId, credential.type, { keyId: credential.keyId, keySecret: credential.keySecret });
  }
  if (credential.scopes) {
    await admin.credentials.setScopes(result.id, credential.type, credential.scopes);
  }
}

module.exports = {
  version: '1.2.0',
  policies: ['populate'],
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
