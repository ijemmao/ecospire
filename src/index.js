import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import env from './../env.json';
import App from './App';

document.getElementsByTagName('meta')[4].setAttribute('content', env.GOOGLE_CLIENT_ID);
ReactDOM.render(<App />, document.getElementById('root'));
