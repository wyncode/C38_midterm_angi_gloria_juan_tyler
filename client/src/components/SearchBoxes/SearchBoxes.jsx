import React from 'react';
import './SearchBoxes.css';

export const SearchBox = (props) => (
  <>
    <form onChange={props.fetchByName}>
      <input
        className="search"
        type="search"
        placeholder="search by name"
        onChange={props.handleNameChange}
      />
      {/* <input type="submit" value="search by name" /> */}
    </form>
    <form onChange={props.fetchByCity}>
      <input
        className="search"
        type="search"
        placeholder="search by city"
        onChange={props.handleCityChange}
      />
      {/* <input type="submit" value="search by city" /> */}
    </form>
  </>
);
