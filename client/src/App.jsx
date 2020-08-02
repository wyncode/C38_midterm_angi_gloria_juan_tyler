import React, { useEffect, useState } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import Feature from './components/Feature';
import './App.css';

const App = () => {
  // const fetchData = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch('https://api.openbrewerydb.org/breweries/search?query=miami')
      .then((response) => response.json())
      .then((data) => setResults(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // };

  // useEffect(fetchDemoData, []);

  return (
    <>
      <div>
        <Feature />

        {results?.map((brewery) => {
          return (
            <>
              <div>{brewery?.name}</div>
              <div>{brewery?.city}</div>
              <div>{brewery?.state}</div>
              <a href={brewery.website_url} target="_blank">
                Brewery
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
