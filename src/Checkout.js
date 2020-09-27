import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import ShoppingBasket from "./ShoppingBasket";
function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
          alt=""
        ></img>
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          <ShoppingBasket />
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
