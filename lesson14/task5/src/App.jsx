import React, { useState } from "react";
import Clock from "./Clock.jsx";

const App = () => {
  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div>
      <button onClick={toggle}>Toggle</button>
      <div>
        {isVisible && (
          <div className="container">
            <Clock location="New York" offset={3} />
            <Clock location="London" offset={9} />
            <Clock location="Kiev" offset={0} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
