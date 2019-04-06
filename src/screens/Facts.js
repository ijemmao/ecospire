import React from 'react';
import Donate from './../components/Donate';

export default class Facts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // driving: 0,
      // flying: 0,
      // averageComparison: 0,
      // offsetFootprint: 0,
    };
  }

  render() {
    return (
      <div className="facts-container">
        <h1>Here are the Facts</h1>

        <h2>How to Offset your Carbon Footprint:</h2>
        <Donate />
        <Donate />
        <Donate />
        <Donate />
      </div>
    );
  }
}
