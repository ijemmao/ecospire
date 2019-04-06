import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import env from './../env.json';
// import App from './App';
import Login from './screens/Login';

document.getElementsByTagName('meta')[4].setAttribute('content', env.GOOGLE_CLIENT_ID);
ReactDOM.render(<Login />, document.getElementById('root'));
