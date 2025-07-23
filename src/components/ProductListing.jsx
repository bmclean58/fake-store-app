import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ProductListing = () => {
    const [products, setProducts] = useState([]);     // State to store products
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null);    // Error state

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
  
    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h1 className="text-center mb-4">Product Listing</h1>

            <Table className="w-auto d-flex justify-content-center" striped bordered hover>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td><img src={product.image} alt={product.title} className="img-thumbnail" width="250px" /></td>
                            <td><h5>{product.title}</h5> <br />
                                <strong>${product.price.toFixed(2)}</strong> <br />
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

