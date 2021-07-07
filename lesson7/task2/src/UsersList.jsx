import React from "react";
import User from "./User.jsx";

class UsersList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sorting: null,
    };
  }
  setSorting = () => {
    const newSorting = this.state.sorting === "asc" ? "desc" : "asc";
    this.setState({
      sorting: newSorting,
    });
  };
  render() {
    console.log(this.props.users);
    let usersList;
    if (this.state.sorting) {
      usersList = this.props.users
        .slice()
        .sort((a, b) =>
          this.state.sorting === "asc" ? a.age - b.age : b.age - a.age
        );
    } else {
      usersList = this.props.users;
    }
    return (
      <div>
        <button className="btn" onClick={this.setSorting}>
          {this.state.sorting || "-"}
        </button>
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
