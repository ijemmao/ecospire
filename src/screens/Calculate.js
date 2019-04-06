import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import ButtonSemantic from '../components/ButtonSemantic';

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
        <DropdownMenu text="Make" />
        <DropdownMenu text="Model" />
        <DropdownMenu text="Year" />
        <ButtonSemantic text="See Carbon Footprint" />
      </div>
    );
  }
}
