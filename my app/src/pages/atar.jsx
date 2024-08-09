import React, { useState, useEffect } from 'react';
import "./home.css";
import  Lastnav  from "../components/lastnav";

function Atar() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products/fetch")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home-container">
      <Lastnav section={'atar'}/>
      <div className="container mt-3 p-0">
        <div className="row d-flex gap-2 m-1">
          {products.map((product, index) => (
            <div key={index} className="product-container col-4 col-sm-4 col-lg-3 col-xl-2">
              <img className="" src={product.image} />
              <p className="m-2">{product.name}</p>
              <h6 className="m-2">{product.price}</h6>
              <button className="buy-btn">Buy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Atar;