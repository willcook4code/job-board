import React from 'react';

const Filters = React.createClass({
	render: function() {
		return (
			<div className="searchBar">
				<div className="filter key">
					<h4>Keywords</h4>
					<input type="text"/>
				</div>
				<div className="filter loc">
					<h4>Location</h4>
					<input type="text"/>
				</div>
				<button>Search</button>
			</div>
		);
	}
});

export default Filters;