import React from "react";

const Login = (props) => {
  console.log(props);
  return <button onClick={props.onLogin}>Login</button>;
};

export default Login;
