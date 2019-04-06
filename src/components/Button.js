import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Button extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button>{this.props.text}</button>
      </div>
    );
  }
}
