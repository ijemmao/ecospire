import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import ButtonSemantic from '../components/ButtonSemantic';

// eslint-disable-next-line react/prefer-stateless-function
export default class Calculate extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculate-container">
        <h1>Please provide us with more details on your carbon usage: </h1>
        <p> Make and model of your car </p>
        <DropdownMenu className="dropdown-container" text="Make" />
        <DropdownMenu className="dropdown-container" text="Model" />
        <DropdownMenu className="dropdown-container" text="Year" />
        <ButtonSemantic text="See Carbon Footprint" />
      </div>
    );
  }
}
