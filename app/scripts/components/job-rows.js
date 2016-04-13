import React from 'react';
import JobPage from './job-page.js';
import Posting from './../unicorn-post.js';
import Company from './../unicorn-post.js';
console.log(Company);
const JobRows = React.createClass({
	render: function() {
	const Jobs = Posting.map((unicorn, index, array) => {
		return (
			<JobPage 
			key={index} 
			jobLocation = {unicorn.attributes.jobLocation}
			position = {unicorn.attributes.position}
			postDay = {unicorn.attributes.postDay}
			description = {unicorn.attributes.description}
			keywords = {unicorn.attributes.keywords}
			company = {unicorn.attributes.company}
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