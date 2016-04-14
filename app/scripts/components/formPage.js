import React from 'react';
import Posting from './../collections/posting-collection.js'

const FormPage = React.createClass({
	postSubmit: function (e) {
		e.preventDefault();
		let eachKey = this.refs.keywords.value;
		let newJob = {
			position: this.refs.position.value,
			jobLocation: this.refs.jobLocation.value,
			description: this.refs.description.value,
			keywords: eachKey.split(' '),
			company: this.refs.company.value
		};
		Posting.create(newJob);
	},
	render: function() {
		return (
			<form>
				<h1> Post Your Job </h1>
				<h3>Title</h3>
				<input 
					type="text"
					ref= 'position'/>
				<h3>Company Name</h3>
				<input 
					type="text"
					ref= 'company'/>
				<h3>Location</h3>
				<input 
					type="text"
					ref='jobLocation'/>
				<h3>Description</h3>
				<textarea 
					type="text"
					ref='description'/>
				<h3>Tags</h3>
				<input 
					type="text"
					ref='keywords'/>
				<button type='submit' onClick = {this.postSubmit}>
					Search Job
				</button>
			</form>
		)
	}
});

export default FormPage;