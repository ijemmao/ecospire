import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/Login';
import Facts from './screens/Facts';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/facts" component={Facts} />
    </Router>
  );
};

export default App;
