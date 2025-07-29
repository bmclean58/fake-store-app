import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// NavBar component renders the top navigation bar using React Bootstrap and React Router
const NavBar = () => {
  return (
    // Bootstrap Navbar with dark theme and padding
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3 mb-4">
      {/* Brand/logo on the left */}
      <Navbar.Brand href="/">Fake Store</Navbar.Brand>
      {/* Hamburger menu for mobile view */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* Collapsible navigation links */}
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {/* Home link */}
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          {/* Product Listing link */}
          <Nav.Link as={NavLink} to="/ProductListing">
            Product Listing
          </Nav.Link>
          {/* Add Product link */}
          <Nav.Link as={NavLink} to="/AddProduct">
            Add Product
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar