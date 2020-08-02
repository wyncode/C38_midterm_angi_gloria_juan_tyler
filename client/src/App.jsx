import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Modal from './components/Modal';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  const handleClick = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <AppContextProvider>
      <div id="demo">
        <h3>Hello from client/src/App.js</h3>
        <ContextDemo />
        <h3>{serverMessage}</h3>
      </div>
      <button onClick={handleClick}>Show modal</button>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <h1>this is the stuff inside the modal</h1>
      </Modal>
    </AppContextProvider>
  );
};

export default App;
