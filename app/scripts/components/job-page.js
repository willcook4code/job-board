import React from 'react';
import newPosting from './../unicorn-post.js';

const JobPage = React.createClass({
	render: function() {
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
					<a href="#">{this.props.keywords[0]}</a>
					<a href="#">{this.props.keywords[1]}</a>
					<a href="#">{this.props.keywords[2]}</a>
					<a href="#">{this.props.keywords[3]}</a>
					<a href="#">{this.props.keywords[4]}</a>
				</div>
			</div>
		);
	}
});

export default JobPage;