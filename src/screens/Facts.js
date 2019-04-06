import React from 'react';

export default class Facts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'test',
    };
  }

  render() {
    return (
      <div>
        {this.state.test}
      </div>
    );
  }
}
