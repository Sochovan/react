import React from "react";

const Offline = (props) => {
  console.log(props);
  return (
    <div className="status">
      <span className="status__text">Offline</span>
      <button className="status__btn" onClick={props.isOnline}>
        Recconect
      </button>
    </div>
  );
};

export default Offline;
