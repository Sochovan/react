import React from "react";

class UserForm extends React.Component {
  state = {
    userData: {
      firstName: "Tom",
      lastName: "Ford",
    },
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      userData: {
        ...this.state.userData,
        [name]: value,
      },
    });
  };
  render() {
    return (
      <form className="user-form">
        <input
          type="text"
          name="firstName"
          className="user-form__input"
          value={this.state.userData.firstName}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="lastName"
          className="user-form__input"
          value={this.state.userData.lastName}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
export default UserForm;
