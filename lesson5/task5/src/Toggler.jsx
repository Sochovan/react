import React from "react";

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      onButton: false,
    };
    console.log(this);
    console.log(this.state);
  }
  onSwitch = () => {
    this.setState({
      onButton: !this.state.onButton,
    });
  };

  render() {
    return (
      <button className="toggler" onClick={() => this.onSwitch()}>
        {this.state.onButton ? "On" : "Off"}
      </button>
    );
  }
}

export default Toggler;
