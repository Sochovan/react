import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div class="page">
      <ul class="navigation">
        <li class="navigation__item">
          <a href="/">Home</a>
        </li>
        <li class="navigation__item">
          <a href="/products">Products</a>
        </li>
      </ul>
    </div>
  );
};
export default App;
