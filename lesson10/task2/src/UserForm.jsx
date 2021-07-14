import React from "react";

class UserForm extends React.Component {
  render() {
    return (
      <form class="user-form">
        <input
          type="text"
          name="firstName"
          class="user-form__input"
          value="John"
        />
        <input
          type="text"
          name="lastName"
          class="user-form__input"
          value="Doe"
        />
      </form>
    );
  }
}
export default UserForm;
