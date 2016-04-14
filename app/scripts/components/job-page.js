import React from 'react';

const JobPage = React.createClass({
	render: function() {
		//map over the keywords
		const eachKey = this.props.keywords.map((val, i, array) => {
			return (
				<span href="#" > {val} </span>
			)
		});
		return (
			<div className="jobPage">
				<div>
					<h2 className="jobTitle">{this.props.position}</h2>
					<p className="postDate">{this.props.postDay}</p>
				</div>
				<div className="location">
					<p><strong>{this.props.company}</strong> &middot; {this.props.jobLocation}</p>
				</div>
				<p className="description">{this.props.description}</p>
				<div className="jobKeywords">
					{eachKey}
				</div>
			</div>
		);
	}
});

export default JobPage;

// <Keys />