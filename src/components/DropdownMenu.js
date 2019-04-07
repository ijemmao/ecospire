import React from 'react';
import { Dropdown, Menu } from 'semantic-ui-react';

// eslint-disable-next-line react/prefer-stateless-function
export default class DropdownMenu extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      // eslint-disable-next-line react/no-unused-state
      value: this.props.text,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    return (
      <Menu compact className="dropdown-container">
        <Dropdown text={this.state.text} onChange={this.handleChange} options={this.props.options} simple item />
      </Menu>
    );
  }
}

