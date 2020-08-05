import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Navbar/navbar.css';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <nav className="navigation">
      <Nav defaultActiveKey="/" as="ul">
        <Nav.Item as="li">
          <Link to="/">Home</Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Link to="/breweries">Brewery Finder</Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Link to="/feature">Feature Brewery</Link>
        </Nav.Item>

        <Nav.Item as="li">
          <Link to="/about">About Us</Link>
        </Nav.Item>
      </Nav>
    </nav>
  );
};

export default TopNav;
