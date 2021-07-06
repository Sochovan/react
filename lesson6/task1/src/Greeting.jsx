import React from "react";
import UserGreeting from "./UserGreeting.jsx";
import GuestGreeting from "./GuestGreeyting.jsx";

const Greeting = (props) => {
  console.log(props);
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};
export default Greeting;
