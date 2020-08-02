import React from 'react'
// import React, { useState, useEffect } from 'react';
// import { AppContextProvider } from './context/AppContext';
// import ContextDemo from './components/ContextDemo';
import Footer from "./components/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

const App = () => {
  // const [serverMessage, setServerMessage] = useState('');

  // const fetchDemoData = () => {
  //   fetch('/api/demo')
  //     .then((response) => response.json())
  //     .then((data) => setServerMessage(data.message));
  // };

  // useEffect(fetchDemoData, []);

  return (
        <Footer />

    // <AppContextProvider>
    //   <div id="demo">
    //     <h3>Hello from client/src/App.js</h3>
    //     <ContextDemo />
    //     <h3>{serverMessage}</h3>
    //   </div>
    // </AppContextProvider>
  );
};

export default App;
