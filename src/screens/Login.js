import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      googleId: 'test',
    };
  }

  render() {
    return (
      <div>
        Ijemma: {this.state.googleId}
      </div>
    );
  }
}
