import React from "react";
import "./ShoppingBasket.css";
import { useStateValue } from "./StateProvider";

function ShoppingBasket() {
  const [{ basket }, dispacth] = useStateValue();
  return <div className="shoppingBasket"></div>;
}

export default ShoppingBasket;
