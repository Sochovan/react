import React, { Component } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div class="page__content">
      <h1>Products</h1>
      <ul class="navigation">
        <li class="navigation__item">
          <a href="/products/book">Book</a>
        </li>
        <li class="navigation__item">
          <a href="/products/ball">Ball</a>
        </li>
      </ul>
    </div>
  );
};
export default Products;
