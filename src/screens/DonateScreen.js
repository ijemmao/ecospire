import React, { Component } from 'react';
import CheckoutForm from '../components/CheckoutForm';
import Donate from '../components/Donate';

export default class DonateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organization: null,
      renderCheckoutForm: false,
    };
  }

  handleCheckoutForm = (title) => {
    this.setState({ organization: title, renderCheckoutForm: true });
  }

  renderCheckout = () => {
    if (this.state.renderCheckoutForm) {
      return (
        <CheckoutForm organization={this.state.organization} />
      );
    } return null;
  }

  render() {
    return (
      <div className="donate-screen-container">
        <h1>Select an Organization to Donate</h1>
        <div className="blue-top" />
        <div className="bottom" />
        <Donate title="Carbon Fund" description="Help fight climate change by going carbon neutral" onClick={() => this.handleCheckoutForm('Carbon Fund')} />
        <Donate
          title="Carbon Neutral Charitable Fund"
          description="We plant trees for our planet. Together let’s reduce our carbon footprint, restore the landscape, and revive biodiversity"
          onClick={() => this.handleCheckoutForm('Carbon Neutral Charitable Fund')}
        />
        <Donate
          title="Carbon Neutral"
          description="We help organisations across Australia, and beyond, minimise their impact on the environment by working with them to measure, reduce and offset greenhouse gas emissions."
          onClick={() => this.handleCheckoutForm('Carbon Neutral')}
        />
        {this.renderCheckout()}
      </div>
    );
  }
}
