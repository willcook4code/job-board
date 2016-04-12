import React from 'react';

const JobPage = React.createClass({
	render: function() {
		return (
			<div className="jobPage">
				<div>
					<h2 className="jobTitle">Senior Frontend Engineer</h2>
					<p className="postDate">yesterday</p>
				</div>
				<div className="location">
					<p><strong>NSONE</strong> &middot; New York, NY</p>
				</div>
				<p className="description">Senior Frontend Engineer Solve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...</p>
				<div className="jobKeywords">
					<a href="#">angularjs</a>
					<a href="#">d3.js</a>
					<a href="#">javascript</a>
					<a href="#">ui</a>
					<a href="#">css</a>
				</div>
			</div>
		);
	}
});

export default JobPage;