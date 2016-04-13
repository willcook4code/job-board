// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import $ from 'jquery';
import Backbone from 'backbone';
import Navs from './components/navs.js';
import JobRows from './components/job-rows.js';
import Infos from './components/infos.js';
import Filters from './components/filters.js';
import Companies from './components/companies.js';
import React from 'react';
import ReactDOM from 'react-dom';
import newCompany from './unicorn-post.js';



const MainComponent = React.createClass({
	render: function() {
		return (
			<div>
				<Navs />
				<section className="searchResults">
					<Filters />
					<JobRows />
				</section>
				<aside>
					<Infos />
					<Companies />
				</aside>
			</div>
		);
	}
});

ReactDOM.render(<MainComponent />, document.querySelector('main'));
