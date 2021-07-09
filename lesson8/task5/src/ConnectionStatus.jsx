import React, { Component } from "react";

class ConnectionStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
    };
  }
  componentDidMount() {
    window.addEventListener("online", this.handleOnline);
    window.addEventListener("offline", this.handleOffline);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handleOnline);
    window.removeEventListener("offline", this.handleOffline);
  }
  handleOnline = () => {
    this.setState({
      status: "online",
    });
  };
  handleOffline = () => {
    this.setState({
      status: "offline",
    });
  };

  render() {
    return this.state.status ? (
      <div className="status">online</div>
    ) : (
      <div className="status status_offline">offline</div>
    );
  }
}
export default ConnectionStatus;
