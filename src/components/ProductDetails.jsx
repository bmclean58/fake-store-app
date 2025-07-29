import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

// ProductDetails component displays detailed information about a single product,
// and allows the user to edit or delete the product.
const ProductDetails = () => {
  // Get product data passed via React Router location state
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  // State for controlling modals and deletion status
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  // Show confirmation modal when delete button is clicked
  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

  // Handle confirmed deletion: call API, show result modal
  const handleConfirmDelete = async () => {
    setShowConfirmModal(false);
    try {
      await axios.delete(`https://fakestoreapi.com/products/${product.id}`);
      setDeleteSuccess(true);
    } catch (error) {
      setDeleteSuccess(false);
    }
    setShowResultModal(true);
  };

  // Handle closing the result modal; navigate back if deletion was successful
  const handleResultModalClose = () => {
    setShowResultModal(false);
    if (deleteSuccess) {
      navigate("/ProductListing");
    }
  };

  // If no product data is available, show a message
  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    // Main container for product details, centered and with max width
    <div className="container d-flex flex-column align-items-center" style={{ maxWidth: "500px" }}>
      {/* Product title */}
      <h1 className="text-center mb-5">{product.title}</h1>
      {/* Product image */}
      <img className="rounded mb-1" src={product.image} alt={product.title} width="300px" />
      {/* Product price */}
      <h2 className="text-center mb-4"><strong>${product.price.toFixed(2)}</strong></h2>
      {/* Product description */}
      <p className="text-center">{product.description}</p>
      {/* Product category */}
      <p className="text-center text-muted">Category: {product.category}</p>
      {/* Add to Cart button (not implemented) */}
      <button className="btn btn-success mb-1">Add to Cart</button>
      {/* Edit Product button, navigates to EditProduct with product data */}
      <Link to="/EditProduct" state={{ product }}>
        <button className="btn btn-success mb-1">Edit Product</button>                            
      </Link>
      {/* Delete Product button, opens confirmation modal */}
      <button className="btn btn-danger mb-2" onClick={handleDeleteClick}>Delete Product</button>

      {/* Confirmation Modal for deletion */}
      <Modal show={showConfirmModal} onHide={() => setShowConfirmModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this product?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowConfirmModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Result Modal after attempting deletion */}
      <Modal show={showResultModal} onHide={handleResultModalClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteSuccess
            ? "Product deleted successfully!"
            : "Failed to delete product. Please try again."}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleResultModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductDetails;