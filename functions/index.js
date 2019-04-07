const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');

admin.initializeApp();

exports.getVehicleStats = functions.https.onRequest((req, res) => {
  return admin.database().collection('/annie_location_history').numChildren();
});

exports.getVehicleStatsDebug = functions.https.onRequest((req, res) => {
  return admin.database().collection('annie_location_history').where('activityType', '==', 'on foot');
});
