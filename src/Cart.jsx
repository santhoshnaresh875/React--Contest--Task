import React from 'react';
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleIncrement = (productId) => {
    dispatch({ type: 'INCREMENT_QUANTITY', payload: productId });
  };

  const handleDecrement = (productId) => {
    dispatch({ type: 'DECREMENT_QUANTITY', payload: productId });
  };

  const handleRemove = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  // Calculate total quantity and amount
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <div className="cart-container">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-price">${item.price} each</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => handleDecrement(item.id)} className="quantity-btn">-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)} className="quantity-btn">+</button>
            </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
      <div className="total-info">
        <p className="total-label">Total Quantity:</p>
        <p>{totalQuantity}</p>
        <p className="total-label">Total Amount:</p>
        <p>${totalAmount}</p>
      </div>
    </div>
  );
};

export default Cart;
