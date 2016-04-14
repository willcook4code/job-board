import React from 'react';
import JobPage from './job-page.js';
// import Keys from './each-keys.js';
import Posting from './../collections/posting-collection.js';


const JobRows = React.createClass({
	getInitialState: function() {
		return {Posting: []}
	},
	componentDidMount: function() {
		Posting.on('add', () => {
			this.setState({Posting: Posting})
		});
		Posting.fetch();
	},
	render: function() {
	const Jobs = Posting.map((post, index, array) => {
		return (
			<JobPage
			jobLocation = {post.get('jobLocation')}
			position = {post.get('position')}
			postDay = {post.get('postDay')}
			description = {post.get('description')}
			keywords = {post.get('keywords')}
			company = {post.get('company')}
			/>
			)
		});
		return (
			<div className="searches">
				{Jobs}
			</div>
		);
	}
});

export default JobRows;

			// keywords = {post.get('keywords')}

// {unicorn.attributes.Posting.get('1').get('company').get('companyName')}