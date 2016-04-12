import React from 'react';

const Filters = React.createClass({
	render: function() {
		return (
			<div className="searchBar">
				<div className="filter">
					<h2>Keywords</h2>
					<input type="text"/>
				</div>
				<div className="filter">
					<h2>Location</h2>
					<input type="text"/>
				</div>
				<button>Search</button>
			</div>
		);
	}
});

export default Filters;