import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

function Subtotal({ basket }) {
  const getBasketTotal = () => {};
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items) :<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        value={getBasketTotal(basket)}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix="$"
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
