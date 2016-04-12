import logo from './../../assets/logo.png';
import React from 'react';

const Navs = React.createClass({
	render: function() {
		return (
			<nav>
				<h2><img src={logo}/>Fresh Jobs</h2>
				<div className="navLinks">
					<a href="#">JOBS</a>
					<a href="#">COMPANIES</a>
					<a href="#">CITIES</a>
					<a href="#">WHY FRESH?</a>
					<a href="#">FOR EMPLOYERS</a>
				</div>
			</nav>
		);
	}
});

export default Navs;