import React from "react";
import "./CheckoutProduct.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";
function ShoppingBasket({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: actionTypes.REMOVE_FROM_BASKET,
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__img" src={image} alt=""></img>
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button className="checkoutProduct__botton" onClick={removeFromBasket}>
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default ShoppingBasket;
