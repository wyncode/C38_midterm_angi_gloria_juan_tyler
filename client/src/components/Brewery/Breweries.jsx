import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Component } from 'react';
import { CardList } from '../BreweriesCard/CardList';
import { SearchBox } from '../SearchBoxes/SearchBoxes';

// class Breweries extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			breweries: [],
// 			searchField: ''
// 		};
// 	}

// 	onSearchChange = (e) => {
// 		this.setState({ searchField: e.target.value });
// 	};

// 	componentDidMount() {
// 		fetch('https://api.openbrewerydb.org/breweries?per_page=50&by_city=miami')
// 			.then((response) => response.json())
// 			.then((name) => this.setState({ breweries: name }));
// 	}
// 	render() {
// 		const { breweries, searchField } = this.state;
// 		const filteredBreweries = breweries.filter((brewery) =>
// 			brewery.name.toLowerCase().includes(searchField.toLowerCase())
// 		);
// 		return (
// 			<div className="home">
// 				<h1>OUR BREWERIES</h1>
// 				<SearchBox onSearchChange={this.onSearchChange} />
// 				<CardList breweries={filteredBreweries} />
// 			</div>
// 		);
// 	}
// }

const Breweries = () => {
  const [brewery, setBrewery] = useState([]);
  const [city, setCity] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    axios.get('https://api.openbrewerydb.org/breweries').then((response) => {
      console.log(response.data);
      setBrewery(response.data);
    });
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchByName = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_name=${name}`)
      .then((response) => {
        setBrewery(response.data);
      });
  };

  const fetchByCity = (event) => {
    event.preventDefault();
    axios
      .get(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
      .then((response) => {
        setBrewery(response.data);
      });
  };

  return (
    <>
      <h1>Brewery Finder</h1>
      <SearchBox
        fetchByName={fetchByName}
        fetchByCity={fetchByCity}
        handleNameChange={handleNameChange}
        handleCityChange={handleCityChange}
      />
      <CardList breweries={brewery} />
    </>
  );
};

export default Breweries;
