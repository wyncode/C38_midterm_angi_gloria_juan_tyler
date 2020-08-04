import React from 'react';
import './SearchBoxes.css';

export const SearchBox = (props) => (
  <>
    <form onSubmit={props.fetchByName}>
      <input
        className="searchName"
        type="search"
        placeholder="search by name"
        onChange={props.handleNameChange}
      />
      <input type="submit" value="search by name" />
    </form>
    <form onSubmit={props.fetchByCity}>
      <input
        className="searchCity"
        type="search"
        placeholder="search by city"
        onChange={props.handleCityChange}
      />
      <input type="submit" value="search by city" />
    </form>
  </>
);
