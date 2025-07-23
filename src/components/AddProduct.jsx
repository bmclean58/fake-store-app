import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';

const AddProduct = () => {
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    category: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://fakestoreapi.com/products', {
      ...form,
      price: parseFloat(form.price)
    })
      .then(response => {
        setShowSuccess(true);
        setForm({
          title: '',
          price: '',
          description: '',
          category: ''
        });
        setTimeout(() => setShowSuccess(false), 3000); // Hide after 3 seconds
      });
  };

  return (
    <Container style={{ maxWidth: '500px', marginTop: '40px' }}>
      <h2 className="mb-4 text-center">Add Product</h2>
      {showSuccess && (
        <Alert variant="success" className="text-center">
          Product added successfully!
        </Alert>
      )}
      <Form onSubmit={handleSubmit}>
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
        <Button variant="success" type="submit" className="w-50 d-block mx-auto">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AddProduct;