import React from 'react';

import './Cards.css';

export const Cards = (props) => (
	<div className="card-container">
		<h2> {props.brewery.name} </h2>
		<p> City: {props.brewery.city} </p>
		<p> State: {props.brewery.state} </p>
		<p> Type: {props.brewery.brewery_type} </p>
		<a href={props.brewery.website_url} a target="_blank">
			{' '}
			Visit Website{' '}
		</a>
	</div>
);
