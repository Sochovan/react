import React from "react";

const UserMenu = ({ userData }) => {
  if (!userData) {
    return null;
  }
  const { name, avatar_url } = userData;
  return (
    <div className="menu">
      <img src={avatar_url} alt="User avatar" className="menu__avatar" />
      <span className="menu__greeting">Hello, {name}</span>
    </div>
  );
};

export default UserMenu;
