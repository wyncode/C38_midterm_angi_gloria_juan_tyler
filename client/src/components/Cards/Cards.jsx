import React from 'react';
import './Cards.css';
import { Link } from 'react-router-dom';

const Cards = (props) => (
	<div className="card-container">
		<img src={props.pic} alt="breweries" style={{ width: '50', height: '50' }} />
		<h2> {props.brewery.name} </h2>
		<p> City: {props.brewery.city} </p>
		<p> State: {props.brewery.state} </p>
		<p> Type: {props.brewery.brewery_type} </p>
		<a href={props.brewery.website_url} a target="_blank">
			{' '}
			Visit Website{' '}
		</a>
		<Link to={`/maps/${props.brewery.id}`}>Google Maps </Link>
	</div>
);

export default Cards;
