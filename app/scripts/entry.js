// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import './../styles/main.scss';
import cat from './../assets/orangecat.jpg';
import Navs from './components/navs.js';
import JobRows from './components/job-rows.js';
import Infos from './components/infos.js';
import Filters from './components/filters.js';
import Companies from './components/companies.js';
import React from 'react';
import ReactDOM from 'react-dom';

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

// const ListItem = React.createClass({
// 	render: function() {
// 		return 	<li> 
// 				<img src={cat} />
// 				<p>this is a list item </p>
// 				</li>;
// 	}
// });

// const List = React.createClass({
// 	render: function() {
// 		let firstListItem = 'Look at all the cats.  Can\'t miss \'em.';
// 		let myListItems = [
// 			<li key="1"> {firstListItem} </li>,
// 				<ListItem key="2"/>,
// 				<ListItem key="3"/>,
// 				<ListItem key="4"/>,
// 				<ListItem key="5"/>
// 		];
// 		return (
// 			<ul>
// 				{myListItems}
// 			</ul>
// 		);
// 	}
// })

// const TestComponent = React.createClass({
// 	render: function() {
// 		return <h1 className="tag-class">Test~</h1>;
// 	}
// });

// ReactDOM.render(<List />, document.querySelector('main'));

