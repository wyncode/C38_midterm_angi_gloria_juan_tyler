import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './Cards.css';
import { Link } from 'react-router-dom';

// const mapStyles = {
// 	width: '50%',
// 	height: '50%'
// };

const Cards = (props) => (
	<div className="card-container">
		<img src={props.url} alt="breweries" />
		{/* <Map
			google={props.google}
			zoom={15}
			style={mapStyles}
			initialCenter={{ lat: props.brewery.latitude, lng: props.brewery.longitude }}
		>
			<Marker position={{ lat: props.brewery.latitude, lng: props.brewery.longitude }} />
		</Map> */}
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

// export default GoogleApiWrapper({
// 	apiKey: 'AIzaSyDLZzFeYmkubzhapzVlvm-og7lAAA4WdQs'
// })(Cards);

export default Cards;
