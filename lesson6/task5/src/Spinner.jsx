import React from "react";

const Spinner = ({ size }) => {
  return (
    <span
      className="spinner"
      style={{ width: `${size}px`, height: `${size}px` }}
    ></span>
  );
};
export default Spinner;
