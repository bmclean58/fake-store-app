import { Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Footer from './components/Footer';


function App() {

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <NavBar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct" element={<EditProduct />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
