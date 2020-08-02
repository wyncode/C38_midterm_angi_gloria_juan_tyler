import React from 'react';
import Breweries from './components/Brewery/Breweries';
import TopNav from './components/Navbar/navbar';
import './App.css';

const App = () => {
	return (
		<>
			<Breweries />

			{/* <TopNav />
			<div id="home">
			<h1 id="welcome">Welcome to the Brewery Finder</h1>
			<button>Brewery of the Month</button>
			<button>Find your Brewery</button>
			</div> */}
		</>
	);
};

export default App;
