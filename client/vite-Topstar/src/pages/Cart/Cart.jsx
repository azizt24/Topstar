// Cart.jsx
import React from "react";

const Cart = ({ cart }) => {
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      <ul className="cart-list">
        {cart.map((product) => (
          <li key={product.id} className="cart-item">
            <img src={product.img} alt={product.title} />
            <div className="cart-item-info">
              <p className="cart-item-title">{product.title}</p>
              <p className="cart-item-price">{product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
