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
      <div class="products">
        <ul class="products__list">
          <li class="products__list-item">
            <span class="products__item-name">iPhone 11</span>
            <span class="products__item-price">$999</span>
          </li>
          <li class="products__list-item">
            <span class="products__item-name">iPad Pro</span>
            <span class="products__item-price">$799</span>
          </li>
        </ul>
        <div class="products__total">Total: $1798</div>
      </div>
    );
  }
}

export default ProductsList;
