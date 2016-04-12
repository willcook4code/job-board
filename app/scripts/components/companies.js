import React from 'react';
import featuredLogo from './../../assets/featured-logo.jpg';
import featured from './../../assets/featured.jpg';

const Companies = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Company Information</h1>
				<div>
					<img src={featured}/>
					<img src={featuredLogo}/>
				</div>
				<div>
					<h1>MaxPlay</h1>
					<h3>Austin, TX</h3>
				</div>
			</div>
		);
	}
});

export default Companies;