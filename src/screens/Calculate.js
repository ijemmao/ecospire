import React from 'react';
import Button from '../components/Button';
import DropdownMenu from '../components/DropdownMenu';

export default class Calculate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyVariable: 'hello',
    };
  }

  render() {
    return (
      <div>
        Please provide us with more details on your carbon usage: {this.state.dummyVariable}
        <p> Make and model of your car </p>
        <Button text="Make" />
        <Button text="Model" />
        <Button text="Year" />
        <Button text="See Carbon Footprint" />
        <DropdownMenu />
      </div>
    );
  }
}
