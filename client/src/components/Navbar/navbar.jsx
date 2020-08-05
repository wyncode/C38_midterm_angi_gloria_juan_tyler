import React from 'react';
import Nav from 'react-bootstrap/Nav';
import '../Navbar/Navbar.css';

const TopNav = () => {
<<<<<<< HEAD
	return (
		<nav className="navigation">
			<Nav defaultActiveKey="/home" as="ul">
				<Nav.Item as="li">
					<Nav.Link href="/home">Home</Nav.Link>
				</Nav.Item>

				<Nav.Item as="li">
					<Nav.Link href="/breweries">Brewery Finder</Nav.Link>
				</Nav.Item>
=======
  return (
    <nav className="navigation">

    <Nav defaultActiveKey="/" as="ul">

      <Nav.Item as="li">
        <Nav.Link href="/">
          Home
        </Nav.Link>
      </Nav.Item>
>>>>>>> 5d1f651dd95008cbbb4bcd4a19cc5b5bd4238460

				<Nav.Item as="li">
					<Nav.Link href="/feature" eventKey="link-2">
						Feature Brewery
					</Nav.Link>
				</Nav.Item>

				{/* <Nav.Item as="li">
        <Nav.Link
          style={{ color: 'yellow' }}
          href="/recipe/random"
          eventKey="link-2">
          Our Breweries
        </Nav.Link>
      </Nav.Item> */}

				<Nav.Item as="li">
					<Nav.Link href="/about" eventKey="link-1">
						About Us
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</nav>
	);
};

export default TopNav;
