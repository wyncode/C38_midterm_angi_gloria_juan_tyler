import React from 'react';
import './CardList.css';
import Cards from '../Cards/Cards';

let url = [
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/2.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/1.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/3.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/4.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/5.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/6.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/7.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/8.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/9.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/10.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/11.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/12.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/13.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/14.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/15.jpg',
  'https://wynbucket.nyc3.cdn.digitaloceanspaces.com/breweries/16.jpg'
];

export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.breweries.map((brewery) => {
        let randomPic = url[Math.floor(Math.random() * url.length)];
        return <Cards key={brewery.id} brewery={brewery} pic={randomPic} />;
      })}
    </div>
  );
};
