import React from "react";

class Login extends React.Component {
  onLogout = (props) => {};
  render() {
    return <button onClick={props.onLogout}>Logout</button>;
  }
}
export default Logout;
