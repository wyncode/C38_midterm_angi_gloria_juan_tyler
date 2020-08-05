import React, { useState } from 'react';
import { BrowserRouter as Router, Prompt, Route } from 'react-router-dom';
import Breweries from './components/Brewery/Breweries';
import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import Maps from './components/Maps/Maps';
import './App.css';

const App = () => {
	const [ brewery, setBrewery ] = useState([]);
	const [ city, setCity ] = useState('');
	const [ name, setName ] = useState('');
	console.log('parents', brewery);
	return (
		<Router>
			<NavBar />
			<Route path="/" exact component={Home} />
			<Route
				exact
				path="/breweries"
				render={(props) => {
					return (
						<Breweries
							{...props}
							brewery={brewery}
							city={city}
							name={name}
							setBrewery={setBrewery}
							setCity={setCity}
							setName={setName}
						/>
					);
				}}
			/>
			<Route
				exact
				path="/maps/:id"
				render={(props) => {
					return <Maps {...props} brewery={brewery} />;
				}}
			/>
		</Router>
	);
};

export default App;
