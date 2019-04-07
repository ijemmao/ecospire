import React from 'react';
import { Button } from 'semantic-ui-react';

// eslint-disable-next-line react/prefer-stateless-function
export default class ButtonSemantic extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Button className="calculate-button"> {this.props.text} </Button>
    );
  }
}
