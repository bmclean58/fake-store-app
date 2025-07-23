import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <>
      <h1 className="text-center mt-5 mb-5">Welcome to the Fake Store App!</h1>
      <div className="d-flex flex-column align-items-center">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80"
          alt="Storefront"
          className="img-fluid rounded mt-5 mb-5"
          style={{ maxWidth: "400px" }}
        />
        <p className="text-center mt-5 mb-5">
          Explore our wide range of products, manage your inventory, and enjoy a seamless shopping experience.
        </p>
        <Link to="/ProductListing">
          <button className="btn btn-success mt-5 mb-5">Show Product Listing</button>
        </Link>
      </div>
    </>
  )
}

export default HomePage