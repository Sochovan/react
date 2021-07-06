import React from "react";
import Spinner from "./Spinner.jsx";
import Login from "./Login.jsx";
import Logout from "./Logout.jsx";

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
      isSpinner: false,
    };
  }

  handleLogin = () => {
    this.setState({
      isLoggedIn: true,
      isSpinner: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: false,
        isSpinner: false,
      });
    }, 2000);
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: true,
      isSpinner: false,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn) {
      button = <Login onLogin={this.handleLogin} />;
    } else {
      button = <Logout onLogout={this.handleLogout} />;
    }
    return <div>{this.state.isSpinner ? <Spinner size={40} /> : button}</div>;
  }
}

export default Auth;
