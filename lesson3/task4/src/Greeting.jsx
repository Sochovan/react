import React from "react";

const Greeting = (props) => {
  console.log(props);
  const birthDate = new Date(1984, 2, 18);
  console.log(birthDate);
  const yearsOld = (new Date() - birthDate) / 1000;

  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I'm ${Math.floor(yearsOld / 3600 / 24 / 365)} years old`}</div>
  );
};

// Greeting("John Doe");
export default Greeting;
