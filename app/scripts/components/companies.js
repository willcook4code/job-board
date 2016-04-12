import React from 'react';
import featuredLogo from './../../assets/featured-logo.jpg';
import featured from './../../assets/featured.jpg';

const Companies = React.createClass({
	render: function() {
		return (
			<div className="compInfos">
				<h1 className="compHeader">Featured Company</h1>
				<div className="compPics">
					<img className="featured" src={featured}/>
					<img className="featuredLogo"src={featuredLogo}/>
				</div>
				<div className="infoText">
					<h1>MaxPlay</h1>
					<h3>Austin, TX</h3>
				</div>
			</div>
		);
	}
});

export default Companies;