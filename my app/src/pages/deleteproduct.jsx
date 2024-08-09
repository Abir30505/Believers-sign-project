import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products/fetch')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        setError(`Error fetching products: ${error.message}`);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (productId) => {
    setError(null);
    setLoading(true);
    try {
      const url = `http://localhost:5000/api/products/deleteProduct/${productId}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });
      if (response.ok) {
        setProducts(products.filter(product => product._id !== productId));
        setLoading(false);
      } else {
        setError(`Error deleting product: ${response.statusText}`);
        setLoading(false);
      }
    } catch (error) {
      setError(`Error deleting product: ${error.message}`);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default DeleteProduct;