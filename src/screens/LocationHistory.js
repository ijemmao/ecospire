import React from 'react';
import * as firebaseCalls from '../firebaseCalls';

export default class LocationHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allLocations: '',
    };
  }

  componentDidMount() {
    firebaseCalls.getNumLocations((allLocations) => {
      this.setState({ allLocations });
    });
  }

  render() {
    return (
      <div>
        {this.state.allLocations}
      </div>
    );
  }
}
