import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Breweries from './components/Brewery/Breweries';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/navbar';
import './App.css';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/breweries" component={Breweries} />
      <Footer />
    </Router>
    
  );
};

export default App;
