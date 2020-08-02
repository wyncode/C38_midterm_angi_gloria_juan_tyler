import React from 'react';
import './CardList.css';
import { Cards } from '../Cards/Cards';

export const CardList = (props) => {
	return (
		<div className="card-list">
			{props.breweries.map((brewery) => <Cards key={brewery.id} brewery={brewery} />)}
		</div>
	);
};
