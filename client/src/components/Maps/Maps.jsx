import React from 'react';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
	width: '100%',
	height: '100%'
};

const Maps = (props) => {
	console.log(props);
	return (
		<div>
			<Map
				google={props.google}
				zoom={15}
				style={mapStyles}
				initialCenter={{ lat: props.brewery.latitude, lng: props.brewery.longitude }}
			>
				<Marker position={{ lat: props.brewery.latitude, lng: props.brewery.longitude }} />
			</Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDLZzFeYmkubzhapzVlvm-og7lAAA4WdQs'
})(Maps);

// const LocationPin = ({ text }) => (
// 	<div className="pin">
// 		<FontAwesomeIcon icon={faMapMarker} className="pin-icon" />
// 		<p className="pin-text">{text}</p>
// 	</div>
// );

// const Maps = ({ location, zoomLevel }) => (
// 	<div className="map">
// 		<h2 className="map-h2">Come Visit Our Brewery</h2>

// 		<div className="google-map">
// 			<GoogleMapReact
// 				bootstrapURLKeys={{ key: 'AIzaSyDLZzFeYmkubzhapzVlvm-og7lAAA4WdQs' }}
// 				defaultCenter={location}
// 				defaultZoom={zoomLevel}
// 			>
// 				<LocationPin lat={location.lat} lng={location.lng} text={location.address} />
// 			</GoogleMapReact>
// 		</div>
// 	</div>
// );

// export default Maps;
