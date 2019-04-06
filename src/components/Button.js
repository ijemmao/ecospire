import React from 'react';

export default class Button extends React.Component {
  callback = () => {
    console.log('what is going on');
  }
  render() {
    return (
      <div>
        <button onClick={this.callback}>{this.props.text}</button>
      </div>
    );
  }
}
