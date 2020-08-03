import React from 'react';
import './CardList.css';
import Cards from '../Cards/Cards';

let url = 'https://source.unsplash.com/collection/762765/500x700';

export const CardList = (props) => {
	return (
		<div className="card-list">
			{props.breweries.map((brewery) => <Cards key={brewery.id} brewery={brewery} url={url} />)}
		</div>
	);
};
