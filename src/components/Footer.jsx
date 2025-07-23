import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => (
  <footer className="bg-dark text-light py-3 mt-auto">
    <Container className="text-center">
      <span>&copy; {new Date().getFullYear()} Fake Store App. All rights reserved.</span>
    </Container>
  </footer>
);

export default Footer;