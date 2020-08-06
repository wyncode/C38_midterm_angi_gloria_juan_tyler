import React from 'react';
import './SearchBoxes.css';

export const SearchBox = (props) => (
	<div className="searchboxes">
		<form onChange={props.fetchByName}>
			<input className="search" type="search" placeholder="search by name" onChange={props.handleNameChange} />
		</form>
		<form onChange={props.fetchByCity}>
			<input className="search" type="search" placeholder="search by city" onChange={props.handleCityChange} />
		</form>
	</div>
);
