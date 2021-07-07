import React from "react";
import Clock from "./Clock.jsx";

const App = () => {
  return (
    <>
      <Clock location="New York" offset={3} />
      <Clock location="London" offset={9} />
      <Clock location="Kiev" offset={0} />
    </>
  );
};

export default App;
