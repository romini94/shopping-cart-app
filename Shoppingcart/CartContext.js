import React, { createContext, useState } from 'react';

// Create the context
export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (itemToRemove) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== itemToRemove.id));
  };

  // Calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}
