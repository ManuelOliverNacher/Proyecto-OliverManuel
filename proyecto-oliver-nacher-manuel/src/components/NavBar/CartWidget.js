import React from "react";
import { useContext } from "react";
import cartContext from "../Context/CartContext";

function CartWidget() {
  const { cart } = useContext(cartContext);
  const cartCount = cart.length;

  return (
    <div>
      <i className="bi bi-handbag">
        {cartCount > 0 && <span> {cartCount}</span>}
      </i>
    </div>
  );
}

export default CartWidget;

