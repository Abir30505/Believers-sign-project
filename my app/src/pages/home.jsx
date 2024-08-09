import React, { useState, useEffect } from "react";
import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/fetch")
      .then(response => response.json())
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="container mt-3 p-0">
        <div className="row d-flex gap-2  ">
          {products.map((product, index) => (
            <div key={index} className="product-container col-6 col-sm-4 col-lg-3 col-xl-2">
              <img className="" src={`http://localhost:5000/${product.image}`} />
              <p className="m-2">{product.name}</p>
              <h6 className="m-2">{product.price}</h6>
              <button className="">Buy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;