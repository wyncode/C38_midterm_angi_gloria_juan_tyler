import React from 'react';
import './SearchBoxes.css';

export const SearchBox = (props) => (
	<input className="search" type="search" placeholder="search by name" onChange={props.onSearchChange} />
);
