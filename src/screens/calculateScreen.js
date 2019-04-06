import React from 'react';

export default class calculateScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyVariable: 'hello',
    };
  }

  render() {
    return (
      <div>
        {this.state.dummyVariable}
      </div>
    );
  }
}
