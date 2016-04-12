import React from 'react';
import JobPage from './job-page.js';

const JobRows = React.createClass({
	render: function() {
		let jobPages = [
			<JobPage key="1" />,
			<JobPage key="2" />,
			<JobPage key="3" />,
			<JobPage key="4" />,
			<JobPage key="5" />,
			<JobPage key="6" />,
			<JobPage key="7" />
		];
		return (
			<div className="searches">
				{jobPages}
			</div>
		);
	}
});

export default JobRows;