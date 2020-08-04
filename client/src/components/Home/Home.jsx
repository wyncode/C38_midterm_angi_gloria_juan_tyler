import React from 'react';
import '../Home/Home.css'
import Logo from './../../../src/Images/logo-color.png'
// import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <main>
      <div className="banner">
        <h5>Welcome to the Brewery Finder!</h5>
        <h1>Immerse yourself into the refreshing lifestyle of brewery touring</h1>
        <p className="button-placeholder">Find Breweries Now</p>
      </div>
      <div className="container">
        <img className="logo-icon" src={Logo} alt="Brewery Finder Logo" />
        <h1>Our Story</h1>
        <p>The miller light beyond an Ellis Island IPA throws some Amarillo Pale Ale at an Imperial Stout around an air hocky table, or a change for a bar tab trades baseball cards with the Amarillo Pale Ale inside a beer.
          The mitochondrial monkey bite finds much coolness with a Dixie Beer defined by some bud light.</p>
          <p>The Honey Brown, a blitzed Dixie Beer, and a black velvet about the Left Hand Milk Stout are what made America great! A tattered milwakees best bestows great honor upon a colt 45.</p>
          <Link className="about-link" to={`/about`}>More About Us</Link>
    </div>
    
    </main>
  );
};

export default Home;
