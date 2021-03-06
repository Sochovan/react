import React from "react";
import Clock from "./Clock.jsx";

class App extends React.Component {
  state = {
    visible: true,
  };
  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        <div>
          {this.state.visible && (
            <div className="container">
              <Clock location="New York" offset={3} />
              <Clock location="London" offset={9} />
              <Clock location="Kiev" offset={0} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
