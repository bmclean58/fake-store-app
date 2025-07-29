import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

// EditProduct component allows users to edit an existing product using a Bootstrap form
const EditProduct = () => {
  // Get product data passed via React Router location state
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  // State to manage form input values, pre-filled with product data
  const [form, setForm] = useState({
    title: product?.title || "",
    price: product?.price || "",
    description: product?.description || "",
    category: product?.category || ""
  });
  // State to control the display of the success message
  const [showSuccess, setShowSuccess] = useState(false);

  // Handle changes in form inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send PUT request to update the product
    axios.put(`https://fakestoreapi.com/products/${product.id}`, {
      ...form,
      price: parseFloat(form.price)
    })
      .then(response => {
        setShowSuccess(true); // Show success message
        setTimeout(() => {
          setShowSuccess(false);
          // Navigation after edit is intentionally removed
        }, 2000);
      });
  };

  return (
    // Container for the form with max width and margin
    <Container style={{ maxWidth: '500px', marginTop: '40px' }}>
      <h2 className="mb-4 text-center">Edit Product</h2>
      {/* Success alert */}
      {showSuccess && (
        <Alert variant="success" className="text-center">
          Product updated successfully!
        </Alert>
      )}
      {/* Product edit form */}
      <Form onSubmit={handleSubmit}>
        {/* Title input */}
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter product title"
            required
          />
        </Form.Group>
        {/* Price input */}
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter price"
            step="0.01"
            required
          />
        </Form.Group>
        {/* Description input */}
        <Form.Group className="mb-3" controlId="formDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter product description"
            required
          />
        </Form.Group>
        {/* Category input */}
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
        </Form.Group>
        {/* Submit button */}
        <Button variant="primary" type="submit" className="w-50 d-block mx-auto">
          Save Changes
        </Button>
      </Form>
    </Container>
  );
};

export default EditProduct;