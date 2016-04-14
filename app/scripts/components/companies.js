import React from 'react';
import company from './../job-post.js'



const Companies = React.createClass({
	render: function() {
		const featComp = company.findWhere({featured: true});
		return (
			<div className="compInfos">
				<h1 className="compHeader">Featured Company</h1>
				<div className="compPics">
					<img className="featured" src={featComp.get('banner')}/>
					<img className="featuredLogo" src={featComp.get('logo')}/>
				</div>
				<div className="infoText">
					<h1>{featComp.get('companyName')}</h1>
					<h3>{featComp.get('companyLocation')}</h3>
				</div>
			</div>
		);
	}
});

export default Companies;