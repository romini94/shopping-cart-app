import React, { useContext } from 'react';
import { CartContext } from './CartContext';

function Cart() {
  const { cartItems, removeItemFromCart, getTotalPrice } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeItemFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${getTotalPrice()}</h3>
    </div>
  );
}

export default Cart;
