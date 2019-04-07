import axios from 'axios';
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

export function getNumLocations() {
  return db.collection('annie_location_history').where('activityType', '==', 'on foot').get().then((snapshot) => {
    snapshot.forEach((entry) => {
      console.log(entry);
    });
  });
}

const ROOT_URL = 'https://us-central1-ecospire.cloudfunctions.net';

export function getVehicleStats() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/getVehicleStats`).then((res) => {
      dispatch(res);
    }).catch((error) => {
      console.error(error);
    });
  };
}
