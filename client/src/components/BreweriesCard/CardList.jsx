import React from 'react';
import './CardList.css';
import Cards from '../Cards/Cards';

let url = [
	'https://images.unsplash.com/photo-1559180786-c6f26acc1111?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1566331411026-239f6d8f323a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1589612167750-29bf9333b2ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1576670394231-fb0d6b7ec8cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1588572362919-a74005d4f7b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1572913017567-02f0649bc4fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1579677567596-ed060ad5ca49?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1559526642-c3f001ea68ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1532634740-6837b2a21d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1564919365536-b6fc3c46afa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1559019873-c2539923cc9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1554128535-06b54be7911f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1554127963-59370787efb4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1572453324985-c985aacb316b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1568979928238-52bfdc1fb3b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1576723072484-b4d99bc3c9a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1559818454-1b46997bfe30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1532634786-c8f8c46a0062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1532634931-f8ec541ea2aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1507310951869-fe0941df4dbd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1542835497-a6813df96ed9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1573730037815-baace9b29fce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1573053777444-d016d937dab9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1532635228-7fbee6fda4d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1560625172-a5d88acc3ba7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1552913902-312b0dcce870?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1585426820798-0f0501cca024?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1505075106905-fb052892c116?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1575055328016-d94e5d9e3461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1552943272-d6c3355669d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400',
	'https://images.unsplash.com/photo-1551797802-f2dd1ec0033e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400'
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
