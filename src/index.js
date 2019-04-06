import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import env from './../env.json';
import App from './App';
<<<<<<< HEAD
// import calculateScreen from './screens/calculateScreen';
=======
// import Login from './screens/Login';
>>>>>>> e0664dae7a31b965954ff7945a73863853a46bad

document.getElementsByTagName('meta')[4].setAttribute('content', env.GOOGLE_CLIENT_ID);
ReactDOM.render(<App />, document.getElementById('root'));
