import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleId: 'testing',
    };
  }

  render() {
    return (
      <div>
        {this.state.googleId}
      </div>
    );
  }
}
