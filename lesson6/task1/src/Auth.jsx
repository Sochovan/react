import React from "react";
import Greeting from "./Greeting.jsx";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }
  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };
  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };
  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <button onClick={this.onLogout}>Logout</button>;
    } else {
      button = <button onClick={this.onLogin}>Login</button>;
    }
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}
export default Auth;
