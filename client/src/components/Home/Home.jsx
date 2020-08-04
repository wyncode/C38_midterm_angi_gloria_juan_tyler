import React from 'react';
import '../Home/Home.css';
import Nav from 'react-bootstrap/Nav';

const Home = () => {
  return (
    <main>
      
      <div className="banner">
        <h5 id="1">Welcome to the Brewery Finder!</h5>
        <h1>Immerse yourself into the refreshing lifestyle of brewery touring</h1>
        <p className="button-placeholder"><Nav.Link href="/breweries">Find Breweries Now</Nav.Link></p>
      </div>
      <div className="container">
        {/* <img src="client/public/logo-color.png" alt="Brewery Finder Logo"></img> */}
        <h1>Our Story</h1>
        <p>Ever wonder where that tasty treat came from? what god created this miracle of beverage? The brewery most be awesome and has to be ran by magicians and  magic elves...
          Look no further! Take the journey and become immersed in one of these most trend setting and innovative process of craft breweries. In, 2019 alone over 8,000 breweries opened up their doors for the first time. </p>
          <p>So what are you waiting for? Find a craft brewery near you and Tap into a cold one today! </p>
      <a href="#"><div className="about-us-button">More About Us</div></a>
    </div>
    
    </main>
  );
};

export default Home;
