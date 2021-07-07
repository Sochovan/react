import React from "react";

const NumbersList = ({ numbers }) => {
  const numberElem = numbers.map((num) => <li>{num}</li>);
  const element = <ul>{numberElem}</ul>;
  return element;
};

export default NumbersList;
