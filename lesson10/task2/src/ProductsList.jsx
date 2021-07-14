import React from "react";

class ProductsList extends React.Component {
  state = {
    cartItems: [
      {
        id: "1",
        name: "iPhone 11",
        price: 999,
      },
      {
        id: "2",
        name: "iPad Pro",
        price: 799,
      },
    ],
  };

  render() {
    const total = this.state.cartItems.reduce(
      (acc, item) => acc + item.price,
      0
    );

    return (
      <div className="products">
        <ul className="products__list">
          <li className="products__list-item">
            <span className="products__item-name">iPhone 11</span>
            <span className="products__item-price">$999</span>
          </li>
          <li className="products__list-item">
            <span className="products__item-name">iPad Pro</span>
            <span className="products__item-price">$799</span>
          </li>
        </ul>
        <div className="products__total">Total: $1798</div>
      </div>
    );
  }
}

export default ProductsList;
