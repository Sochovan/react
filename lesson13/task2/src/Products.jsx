import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Product from "./Product.jsx";

const Products = () => {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
      </ul>
      <Switch>
        <Route>
          <Product path="/products/:productId" />
        </Route>
      </Switch>
    </div>
  );
};
export default Products;
