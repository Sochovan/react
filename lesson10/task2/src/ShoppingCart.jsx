import React from "react";
import ProductsList from "./ProductsList.jsx";

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="column">
        <ProductsList />
      </div>
    );
  }
}

export default ShoppingCart;
