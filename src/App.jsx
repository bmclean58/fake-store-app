import { Routes, Route } from 'react-router-dom';
import ProductListing from './components/ProductListing'
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import ProductDetails from './components/ProductDetails';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
import Footer from './components/Footer';

// Main App component that sets up the layout and routing for the Fake Store App
function App() {
  return (
    // Use Bootstrap classes for vertical layout and background color
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navigation bar at the top */}
      <NavBar />
      {/* Main content area that grows to fill available space */}
      <div className="flex-grow-1">
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/EditProduct" element={<EditProduct />} />
        </Routes>
      </div>
      {/* Footer at the bottom */}
      <Footer />
    </div>
  )
}

export default App
