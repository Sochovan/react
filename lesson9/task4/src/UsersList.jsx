import React from "react";
import User from "./User.jsx";
import Filter from "./Filter.jsx";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChange = (event) => {
    console.log(event.target.value);
    this.setState({
      value: event.target.value,
    });
  };

  onFiltered = (value) => {
    return value === ""
      ? this.props.users
      : this.props.users.filter((user) =>
          user.name.toLowerCase().includes(this.state.value.toLocaleLowerCase())
        );
  };

  render() {
    let usersList = this.onFiltered(this.state.value);
    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.value}
          count={this.props.users.length}
        />
        <ul className="users">
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
