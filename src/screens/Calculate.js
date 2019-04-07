import React from 'react';
import DropdownMenu from '../components/DropdownMenu';
import ButtonSemantic from '../components/ButtonSemantic';


// eslint-disable-next-line no-unused-vars
const make = [
  { key: 1, text: 'Honda', value: 1 },
  { key: 2, text: 'Nissan', value: 2 },
  { key: 3, text: 'Toyota', value: 3 },
];

// eslint-disable-next-line no-unused-vars
const model = [
  { key: 1, text: 'Accord', value: 1 },
  { key: 2, text: 'Altima', value: 2 },
  { key: 3, text: 'Camry', value: 3 },
];

const year = [
  { key: 1, text: '2000', value: 1 },
  { key: 2, text: '2001', value: 2 },
  { key: 3, text: '2002', value: 3 },
  { key: 4, text: '2003', value: 4 },
  { key: 5, text: '2004', value: 5 },
  { key: 6, text: '2005', value: 6 },
  { key: 7, text: '2006', value: 7 },
  { key: 8, text: '2007', value: 8 },
  { key: 9, text: '2008', value: 9 },
  { key: 10, text: '2009', value: 10 },
  { key: 11, text: '2010', value: 11 },
  { key: 12, text: '2011', value: 12 },
  { key: 13, text: '2012', value: 13 },
];


// eslint-disable-next-line react/prefer-stateless-function
export default class Calculate extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="calculate-container">
        <h2>Please provide us with more details on your carbon usage: </h2>
        <p> Make and model of your car </p>
        <div className="dropdown-wrapper">
          <div className="dropdown-container">
            <DropdownMenu className="dropdown-container" text="Make" options={make} />
          </div>
          <div className="dropdown-container">
            <DropdownMenu className="dropdown-container" text="Model" options={model} />
          </div>
          <div className="dropdown-container">
            <DropdownMenu className="dropdown-container" text="Year" options={year} />
          </div>
        </div>
        <div className="buttonsemantic-container"> <ButtonSemantic text="See Carbon Footprint" />
        </div>
      </div>
    );
  }
}
