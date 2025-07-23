import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmModal(true);
  };

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

  const handleResultModalClose = () => {
    setShowResultModal(false);
    if (deleteSuccess) {
      navigate("/ProductListing");
    }
  };

  if (!product) {
    return <div>No product data available.</div>;
  }

  return (
    <div className="container d-flex flex-column align-items-center" style={{ maxWidth: "500px" }}>
      <h1 className="text-center mb-5">{product.title}</h1>
      <img className="rounded mb-1" src={product.image} alt={product.title} width="300px" />
      <h2 className="text-center mb-4"><strong>${product.price.toFixed(2)}</strong></h2>
      <p className="text-center">{product.description}</p>
      <p className="text-center text-muted">Category: {product.category}</p>
      <button className="btn btn-success mb-1">Add to Cart</button>
      <Link to="/EditProduct" state={{ product }}>
        <button className="btn btn-success mb-1">Edit Product</button>                            
      </Link>
      <button className="btn btn-danger mb-2" onClick={handleDeleteClick}>Delete Product</button>

      {/* Confirmation Modal */}
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

      {/* Result Modal */}
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