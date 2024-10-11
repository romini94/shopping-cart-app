import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Cart Application</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
