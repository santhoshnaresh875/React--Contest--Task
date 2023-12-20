import React from 'react';
import { useCart } from './CartContext';

const ProductList = () => {
  const { dispatch } = useCart();

  // Assuming you fetched the product data from an API
  const products = [
    {
      "id": 1,
      "title": "iPhone 9",
      "price": 1999,
      "stock": 50,
      "thumbnail": "https://www.digitaltoo.com/wp-content/uploads/sites/3/2020/01/iPhone-9-1.jpg"
    },
    {
      "id": 2,
      "title": "iPhone 13 pro",
      "price": 3999,
      "stock": 10,
      "thumbnail": "https://www.dslr-zone.com/wp-content/uploads/2021/10/2-2-800x800.jpeg"
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "price": 999,
      "stock": 80,
      "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg"
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "price": 899,
      "stock": 30,
      "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    },
    {
      "id": 5,
      "title": "vivo v11",
      "price": 699,
      "stock": 20,
      "thumbnail": "https://www.deepspecs.com/wp-content/uploads/2018/07/vivo-v11-pro-1.jpg"
    }
    // ... (repeat for other products)
  ];

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

