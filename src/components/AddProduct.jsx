import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

// AddProduct component allows users to add a new product using a Bootstrap form
const AddProduct = () => {
  // State to manage form input values
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: ''
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
    // Send POST request to add the product
    axios.post('https://fakestoreapi.com/products', {
      ...form,
      price: parseFloat(form.price)
    })
      .then(response => {
        setShowSuccess(true); // Show success message
        // Reset form fields
        setForm({
          title: '',
          price: '',
          description: '',
          category: ''
        });
        // Hide success message after 3 seconds
        setTimeout(() => setShowSuccess(false), 3000);
      });
  };

  return (
    // Container for the form with max width and margin
    <Container style={{ maxWidth: '500px', marginTop: '40px' }}>
      <h2 className="mb-4 text-center">Add Product</h2>
      {/* Success alert */}
      {showSuccess && (
        <Alert variant="success" className="text-center">
          Product added successfully!
        </Alert>
      )}
      {/* Product form */}
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
        <Button variant="success" type="submit" className="w-50 d-block mx-auto">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;