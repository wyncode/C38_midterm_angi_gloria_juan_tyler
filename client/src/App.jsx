import React, { useState, useEffect } from 'react';
import Modal from './components/Modal';

import './App.css';
import Footer from './components/Footer/Footer.jsx';
import About from './components/About/About';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleClick}>Show modal</button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h1>this is the stuff inside the modal</h1>
      </Modal>
    </>
  );
};

export default App;
