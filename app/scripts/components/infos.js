import React from 'react';

const Infos = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Looking for a job?</h1>
				<p>Create a Fresh Jobs profile and <strong>let employers come to you.</strong></p>
				<ul>
					<li>Employers search our database and contact you</li>
					<li>Import easily from LinkedIn</li>
					<li>Link to Stack Overflow, GitHub, CodePlex and more</li>
				</ul>
				<button>Create a Profile</button>
			</div>
		);
	}
});

export default Infos;