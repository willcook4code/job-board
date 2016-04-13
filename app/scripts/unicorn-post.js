import CompanyModel from './models/company-model.js';
import PostingCollection from './collections/posting-collection.js';

import CompanyCollection from './collections/company-collection.js';
var Company = new CompanyCollection();

var companies = [
	{
		companyName: 'ProsNSONE',
		companyLocation: 'New York, NY',
		logo: '',
		banner: '',
		featured: false
	},
	{
		companyName: 'Cool Workplace',
		companyLocation: 'New York, NY',
		logo: '',
		banner: '',
		featured: false
	}
];
Company.add(companies);
console.log(Company);


var postings = [
	{
		jobLocation: 'New York, NY',
		position: 'Senior Frontend Engineer',
		postDay: 'yesterday',
		description: 'Senior Frontend Engineer Solve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...',
		keywords: ['angularjs', 'd3.js', 'javascript', 'ui', 'css'],
		company: 'ProsNSONE'
	},
	{
		jobLocation: 'New York, NY',
		position: 'Other Job Thing',
		postDay: 'yesterday',
		description: 'Senior Frontend Engineer Solve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...',
		keywords: ['angularjs', 'd3.js', 'javascript', 'ui', 'css'],
		company: 'Cool Workplace'
	}
];
var Posting = new PostingCollection();
Posting.add(postings);
console.log(Posting);
export default Posting;

// export default Company;

