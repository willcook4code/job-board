import React from 'react';

const Infos = React.createClass({
	render: function() {
		return (
			<div className="infos">
				<h1 className="infos_header">Looking for a job?</h1>
				<div>
					<p>Create a Fresh Jobs profile and <strong>let employers come to you.</strong></p>
					<ul>
						<li>Employers search our database and contact you</li>
						<li>Import easily from LinkedIn</li>
						<li>Link to Stack Overflow, GitHub, CodePlex and more</li>
					</ul>
					<button className="profileButt">Create a Profile</button>
				</div>
			</div>
		);
	}
});

export default Infos;