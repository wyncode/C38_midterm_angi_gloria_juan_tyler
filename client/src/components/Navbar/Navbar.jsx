import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const TopNav = () => {
	return (
		<Nav className="justify-content-center" style={{ backgroundColor: 'black' }} defaultActiveKey="/home" as="ul">
			<Nav.Item as="li">
				<Nav.Link style={{ color: 'yellow' }} href="/">
					<strong>Imagine a logo here</strong>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link style={{ color: 'yellow' }} href="/breweries">
					<strong>Brewery Finder</strong>
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link style={{ color: 'yellow' }} href="/about" eventKey="link-1">
					About Us
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link style={{ color: 'yellow' }} href="/recipe/random" eventKey="link-2">
					Feature Brewery
				</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link style={{ color: 'yellow' }} href="/recipe/random" eventKey="link-2">
					Our Breweries
				</Nav.Link>
			</Nav.Item>{' '}
			<Nav.Item as="li">
				<Nav.Link style={{ color: 'yellow' }} href="/recipe/random" eventKey="link-2">
					<FontAwesomeIcon icon={faInstagram} />
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default TopNav;
