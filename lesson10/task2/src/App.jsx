import React, { Component } from "react";
import ShoppingCart from "./ShoppingCart.jsx";
import Profile from "./Profile.jsx";

class Page extends Component {
  render() {
    return (
      <div className="page">
        <main className="content">
          <ShoppingCart />
          <Profile />
        </main>
      </div>
    );
  }
}

export default Page;
