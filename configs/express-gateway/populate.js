const fs = require('fs');
const admin = require('express-gateway/admin')({
  baseUrl: 'http://localhost:9876',
  verbose: false,
  headers: null
});

async function createScopes(scopes) {
  await admin.scopes.create(scopes);
}

async function createCredential(consumerId, credential) {
  let result = await admin.credentials.create(consumerId, credential.type, { keyId: credential.keyId, keySecret: credential.keySecret });
  if (credential.scopes) {
    await admin.credentials.setScopes(result.id, credential.type, credential.scopes);
  }
}

async function createUser(user) {
  let user_data = { username: user };
  let result = await admin.users.create(user_data);
  return result.id;
}

async function createApp(userId, app, scopes) {
  let app_data = { name: app, scopes: scopes }
  let result = await admin.apps.create(userId, app_data)
  return result.id;
}

async function populate(config) {
  createScopes(config.scopes);
  for (const [user, apps] of Object.entries(config.users)) {
    let userId = await createUser(user);
    for (const [app, credential] of Object.entries(apps)) {
      let appId = await createApp(userId, app, credential.scopes);
      await createCredential(appId, credential)
    }
  }
}


populate(JSON.parse(fs.readFileSync('./config.json')))
