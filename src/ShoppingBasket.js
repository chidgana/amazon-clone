import React from "react";
import "./ShoppingBasket.css";
import { useStateValue } from "./StateProvider";

function ShoppingBasket() {
  const [{ basket }, dispacth] = useStateValue();
  const removeFromBasket = () => {};
  return (
    <>
      {basket.map((item) => (
        <div className="shoppingBasket">
          <div className="shoppingBasket__info">
            <p>{item.title}</p>
            <p className="shoppingBasket__price">
              <small>$</small>
              <strong>{item.price}</strong>
            </p>
            <div className="shoppingBasket__rating">
              {Array(item.rating)
                .fill()
                .map((_, i) => (
                  <p>⭐</p>
                ))}
            </div>
          </div>
          <img src={item.image} alt=""></img>
          <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
      ))}
    </>
  );
}

export default ShoppingBasket;
