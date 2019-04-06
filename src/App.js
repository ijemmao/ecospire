import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './screens/Login';
import Facts from './screens/Facts';
import Calculate from './screens/Calculate';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/facts" component={Facts} />
      <Route path="/calculate" component={Calculate} />
    </Router>
  );
};

export default App;
