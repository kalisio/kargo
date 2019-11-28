const fs = require('fs');
const admin = require('express-gateway/admin')({
  baseUrl: 'http://localhost:9876',
  verbose: false,
  headers: null
});

async function clearScopes() {
  let result = await admin.scopes.list()
  if (result.scopes) {
    for (i = 0; i < result.scopes.length; i++) await admin.scopes.remove(result.scopes[i])
  }
}

async function clearUsers() {
  let result = await admin.users.list()
  if (result.users) {
    for (i = 0; i < result.users.length; i++) await admin.users.remove(result.users[i].id)
  }
}

async function clean() {
  await clearScopes()
  await clearUsers() // cleans the app as well as the credentials
}

clean()
