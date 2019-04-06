import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import env from './../env.json';
// import App from './App';
import Calculate from './screens/Calculate';
// import Button from './components/Button';
// import Login from './screens/Login';

document.getElementsByTagName('meta')[4].setAttribute('content', env.GOOGLE_CLIENT_ID);
ReactDOM.render(<Calculate />, document.getElementById('root'));
