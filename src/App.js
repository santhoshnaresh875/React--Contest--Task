// App.js
import React from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import './App.css';
import './ProductList.css';


function App() {
  return (
    <CartProvider>
      <div className="App">
        <header className="App-header">
          <h1>Shopping Cart</h1>
        </header>
        <div className="App-content">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
}

export default App;
