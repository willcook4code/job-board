import React from 'react';
import Company from './../job-post.js'



const Companies = React.createClass({
	render: function() {
		return (
			<div className="compInfos">
				<h1 className="compHeader">Featured Company</h1>
				<div className="compPics">
					<img className="featured" src={Company.get('1').get('banner')}/>
					<img className="featuredLogo" src={Company.get('1').get('logo')}/>
				</div>
				<div className="infoText">
					<h1>{Company.get('1').get('companyName')}</h1>
					<h3>{Company.get('1').get('companyLocation')}</h3>
				</div>
			</div>
		);
	}
});

export default Companies;