import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';

// ProductListing component fetches and displays a list of products in a table
const ProductListing = () => {
    // State to store products
    const [products, setProducts] = useState([]);
    // Loading state
    const [loading, setLoading] = useState(true);
    // Error state
    const [error, setError] = useState(null);

    // Fetch products from API when component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
  
    // Show loading message while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    // Show error message if fetch fails
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        // Main container for product listing
        <div>
            {/* Heading */}
            <h1 className="text-center mb-4">Product Listing</h1>

            {/* Table of products */}
            <Table className="w-auto d-flex justify-content-center" striped bordered hover>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            {/* Product image */}
                            <td>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="img-thumbnail"
                                    width="250px"
                                />
                            </td>
                            {/* Product details and View Details button */}
                            <td>
                                <h5>{product.title}</h5> <br />
                                <strong>${product.price.toFixed(2)}</strong> <br />
                                {/* Link to product details page, passing product as state */}
                                <Link
                                  to="/ProductDetails"
                                  state={{ product }}
                                >
                                  <button className="btn btn-success mt-2">View Details</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductListing;

