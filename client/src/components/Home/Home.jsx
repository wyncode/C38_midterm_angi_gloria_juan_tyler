import React from 'react';
import '../Home/Home.css';
import Logo from './../../../src/Images/logo-color.png';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main>
			<div className="banner">
				<h5>Welcome to the Brewery Finder!</h5>
				<h1>Immerse yourself into the refreshing</h1> <h1>lifestyle of brewery touring</h1>
				<Link className="button-placeholder" to={'/breweries'}>
					Find Breweries Now
				</Link>
			</div>
			<div className="container">
				<img className="logo-icon" src={Logo} alt="Brewery Finder Logo" />
				<h1 className="Our">Our Story</h1>
				<p>
					Ever wonder where that tasty treat came from? what god created this miracle of beverage? The brewery
					most be awesome and has to be ran by magicians and magic elves... Look no further! Take the journey
					and become immersed in one of these most trend setting and innovative process of craft breweries.
					In, 2019 alone over 8,000 breweries opened up their doors for the first time.{' '}
				</p>
				<p>So what are you waiting for? Find a craft brewery near you and Tap into a cold one today! </p>
				<Link className="about-link" to={`/about`}>
					More About Us
				</Link>
			</div>
		</main>
	);
};

export default Home;
