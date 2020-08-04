import React from 'react';
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Modal from './components/Modal';
import './App.css';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About';
import Feature from './components/Feature/Feature'
import NavBar from './components/Navbar/navbar';
import Home from './components/Home/Home';
import Breweries from './components/Brewery/Breweries';
// import { Link } from 'react-router-dom';

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //       setIsOpen(true);
  //     };
    
  //     const closeModal = () => {
  //       setIsOpen(false);
  //     };


  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/breweries" component={Breweries} />
      <Route path="/about" component={About} />
      <Route path="/feature" component={Feature} />
      {/* <button onClick={handleClick}>Show modal</button> */}
      {/* <Modal isOpen={isOpen} closeModal={closeModal}>
         <h1>Are you over 21?</h1>
         <div className="options">
            <button onClick={closeModal}><Link to={`/`}>Yes</Link></button>
            <button><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">No</a></button>
         </div>
       </Modal> */}
      <Footer />
      
    </Router>
    
  );
};

export default App;


