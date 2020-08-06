import React, { useEffect } from 'react';
import axios from 'axios';
import { CardList } from '../BreweriesCard/CardList';
import { SearchBox } from '../SearchBoxes/SearchBoxes';
import './Breweries.css';

const Breweries = ({ city, name, brewery, setCity, setName, setBrewery }) => {
  useEffect(() => {
    axios
      .get('https://api.openbrewerydb.org/breweries?per_page=12')
      .then((response) => {
        setBrewery(response.data);
      });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchByName = () => {
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_name=${name}`)
      .then((response) => {
        setBrewery(response.data);
      });
  };

  const fetchByCity = () => {
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((response) => {
        setBrewery(response.data);
      });
  };

  return (
    <div className="container-breweries">
      <h1 style={{ textAlign: 'center', marginTop: '3rem' }}>Brewery Finder</h1>
      <SearchBox
        fetchByName={fetchByName}
        fetchByCity={fetchByCity}
        handleNameChange={handleNameChange}
        handleCityChange={handleCityChange}
      />
      <CardList breweries={brewery} />
    </div>
  );
};

export default Breweries;
