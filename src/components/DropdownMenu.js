import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

const options = [
  { key: 1, text: 'Honda', value: 1 },
  { key: 2, text: 'Volkswagon', value: 2 },
  { key: 3, text: 'Toyota', value: 3 },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class DropdownMenu extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu compact>
        <Dropdown text={this.props.text} options={options} simple item />
      </Menu>
    );
  }
}

