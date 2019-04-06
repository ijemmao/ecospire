import React from 'react';

export default class Donate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Plant Trees',
      description: 'We aim to make the earth healthier with planting more tress',
    };
  }

  render() {
    return (
      <div className="donate-container">
        <h2>{this.state.name}</h2>
        <p>{this.state.description}</p>
      </div>
    );
  }
}
