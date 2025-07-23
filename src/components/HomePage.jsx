import React from 'react'
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <>
      <h1>Welcome to the Fake Store</h1>
      <div>
        <Link to="/ProductListing">
          <button>Show Product Listing</button>
        </Link>
      </div>
    </>
  )
}

export default HomePage