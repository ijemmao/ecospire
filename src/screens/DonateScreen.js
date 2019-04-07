import React, { Component } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import Donate from '../components/Donate';

export default class DonateScreen extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <div className="donate-screen-container">
        <h1>Select an Organization to Donate</h1>
        <Donate title="Carbon Fund" description="Help fight climate change by going carbon neutral" />
        <Donate />
        <Donate />
        <Donate />
        <CheckoutForm />
      </div>
    );
  }
}
