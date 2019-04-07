import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCSowrEYKl-iLOHeGGyXb3KVnd8hB59RUM',
  authDomain: 'ecospire.firebaseapp.com',
  databaseURL: 'https://ecospire.firebaseio.com',
  projectId: 'ecospire',
  storageBucket: 'ecospire.appspot.com',
  messagingSenderId: '140339089929',
};
firebase.initializeApp(config);
const db = firebase.firestore();

export function getPastWeekVehicleStats(callback) {
  const aWeekAgo = new Date();
  let totalTime = 0;
  aWeekAgo.setDate(aWeekAgo.getDate() - 7);
  return db.collection('annie_location_history')
    .where('activityType', '==', 'in vehicle')
    .where('date', '>=', aWeekAgo)
    .get()
    .then((snapshot) => {
      snapshot.forEach((entry) => {
        totalTime += entry.data().minuteDifference;
      });
      callback(totalTime);
      console.log(`total minutes last week: ${totalTime}`);
    });
}

export function getPastMonthVehicleStats(callback) {
  const aMonthAgo = new Date();
  let totalTime = 0;
  aMonthAgo.setDate(aMonthAgo.getDate() - 31);
  return db.collection('annie_location_history')
    .where('activityType', '==', 'in vehicle')
    .where('date', '>=', aMonthAgo)
    .get()
    .then((snapshot) => {
      snapshot.forEach((entry) => {
        totalTime += entry.data().minuteDifference;
      });
      callback(totalTime);
      console.log(`total minutes last month: ${totalTime}`);
    });
}

export function getPastYearVehicleStats(callback) {
  const aYearAgo = new Date();
  let totalTime = 0;
  aYearAgo.setDate(aYearAgo.getDate() - 125);
  return db.collection('annie_location_history')
    .where('activityType', '==', 'in vehicle')
    .where('date', '>=', aYearAgo)
    .get()
    .then((snapshot) => {
      snapshot.forEach((entry) => {
        totalTime += entry.data().minuteDifference;
      });
      callback(totalTime);
      console.log(`total minutes last year: ${totalTime}`);
    });
}
