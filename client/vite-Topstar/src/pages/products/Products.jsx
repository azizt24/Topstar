import { useState, useEffect } from "react";

const PerfumeList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.data);
      })
      .then((data) => setProducts(data.data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Perfume Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt={product.title} />
            <h3>{product.tag}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PerfumeList;
