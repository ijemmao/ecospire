import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
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
      <div className="checkout-container">
        <h1>Donate to Plant Trees</h1>
        <p className="stripe-label">Amount</p>
        <input
          type="text"
          className="stripe-element-container"
        />
        <p className="stripe-label">Card Details</p>
        <CardElement className="stripe-element-container" />
        <button className="stripe-button" onClick={this.submit}>Donate</button>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
