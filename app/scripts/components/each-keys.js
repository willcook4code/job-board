// import React from 'react';
// import Key from './key.js';
// import Posting from './../collections/posting-collection.js';

// const EachKey = React.createClass({
// 	getInitialState: function() {
// 		return {Posting: []}
// 	},
// 	componentDidMount: function() {
// 		Posting.on('add', () => {
// 			this.setState({Posting: Posting})
// 		});
// 		Posting.fetch();
// 	},
// 	render: function() {
// 	const Keys = Posting.map((post, index, array) => {
// 		console.log(post.get[index].get('keywords'));
// 		return (
// 			<Key 
// 			key = {index}
// 			keywords = {post.('keywords')}
// 			/>
// 			)
// 		});M
// 		return (
// 			<div>
// 				{Keys}
// 			</div>
// 		);
// 	}
// });

// export default EachKey;