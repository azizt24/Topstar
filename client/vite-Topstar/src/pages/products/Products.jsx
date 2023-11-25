import React, { useState, useEffect } from "react";
import "./Products.css";

const Products = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setProducts(data.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleBuyClick = (product) => {
    console.log(`Buy button clicked for product with id: ${product.id}`);
    addToCart(product);
  };

  return (
    <div className="perfume-container">
      <h1>Perfume Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.img} alt={product.title} />
            <h3>{product.tag}</h3>
            <p>{product.price}</p>
            <button onClick={() => handleBuyClick(product)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
