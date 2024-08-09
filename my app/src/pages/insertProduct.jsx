import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InsertProduct() {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('id', productId);
    formData.append('name', productName);
    formData.append('price', productPrice);
    formData.append('image', productImage);

    try {
      const response = await fetch('http://localhost:5000/api/products/post', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      navigate('/', { replace: true })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create Product</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="productId" className="form-label">Product ID</label>
          <input type="text" className="form-control" id="productId" placeholder="product-id" value={productId} onChange={(event) => setProductId(event.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="productName" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="productName" placeholder="product-name" value={productName} onChange={(event) => setProductName(event.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="productPrice" className="form-label">Product Price</label>
          <input type="text" className="form-control" id="productPrice" placeholder="product-price" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlFor="productImage" className="form-label">Product Image</label>
          <input type="file" className="form-control" id="productImage" onChange={(event) => setProductImage(event.target.files[0])} />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">Create Product</button>
        </div>
      </form>
    </div>
  );
}

export default InsertProduct;