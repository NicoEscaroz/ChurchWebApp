const admin = require("firebase-admin");

// Check if an app is already initialized
if (admin.apps.length === 0) {
  const serviceAccount = require("./admin.json");

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

module.exports = admin;
