import React, { Component } from "react";
import Userform from "./Userform.jsx";

class App extends Component {
  constructor(props) {
    super(props);
  }

  createUser = (user) => {
    console.log(user);
  };

  render() {
    return <Userform onSubmit={this.createUser} />;
  }
}
export default App;
