import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Login from './screens/Login';
import Facts from './screens/Facts';
import Calculate from './screens/Calculate';
import CheckoutForm from './screens/CheckoutForm';

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_2GnQCRfByayMfLa6U4E7lcCW00AV3F5LZw">
      <Elements>
        <Router>
          <Route path="/" exact component={Login} />
          <Route path="/facts" component={Facts} />
          <Route path="/calculate" component={Calculate} />
          <Route path="/donate" component={CheckoutForm} />
        </Router>
      </Elements>
    </StripeProvider>
  );
};

export default App;
