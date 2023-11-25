 
 

import React, { useState, useEffect } from 'react';

const PerfumeList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
 
    fetch('http://localhost:3000/products')
      .then(response => response.json() ).then(data =>)
    
      .then(data => setProducts(data.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <h1>Perfume Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.Image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfumeList;
