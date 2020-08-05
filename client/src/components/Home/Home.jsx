import React from 'react';
import '../Home/Home.css';
import Logo from './../../../src/Images/logo-color.png';
// import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const Home = () => {
	return (
		<main>
			<div className="banner">
				<h5>Welcome to the Brewery Finder!</h5>
				<h1>Immerse yourself into the refreshing lifestyle of brewery touring</h1>
				<p className="button-placeholder">
					<Nav.Link href="/breweries">Find Breweries Now</Nav.Link>
				</p>
			</div>
			<div className="container">
				<img className="logo-icon" src={Logo} alt="Brewery Finder Logo" />
				<h1 className="Our">Our Story</h1>
				<p>
					You've been wondering where that tasty wheaty treat in your glass comes from. What awesome party god
					created this miracle of a beverage? The home brewery must be a mystical place run by magicians and
					elves... Now you can take the journey and see for yourself! Use Brewery Finder to travel to all your
					favorited breweries and become immersed in the trendsetting and innovative world of craft brewery
					experiences. In 2019 alone, over 8,000 breweries opened up their doors and enriched the fantastic
					brewery community. There's a whole lot of exploring to do - don't wait a minute more! Find a craft
					brewery near you and tap into a cold one today!{' '}
				</p>
				<Link className="about-link" to={`/about`}>
					More About Us
				</Link>
			</div>
		</main>
	);
};

export default Home;
