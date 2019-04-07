import React from 'react';

export default class Fact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: <div className="icon-container plane" />,
    };
  }

  componentWillMount = () => {
    if (this.props.type === 'car') {
      this.setState({ icon: <div className="icon-container car" /> });
    } else if (this.props.type === 'salad') {
      this.setState({ icon: <div className="icon-container salad" /> });
    }
  }
  render() {
    return (
      <div className={`fact-container ${this.props.position === 'right' ? 'right' : 'left'}`}>
        <h4>This is some fun fact about your carbon emission</h4>
        {this.state.icon}
      </div>
    );
  }
}
