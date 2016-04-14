import CompanyCollection from './collections/company-collection.js';


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
var Company = new CompanyCollection();
Company.add(companies);
console.log(Company);


// var postings = [
// 	{
// 		id: 1,
// 		jobLocation: 'New York, NY',
// 		position: 'Senior Frontend Engineer',
// 		postDay: 'yesterday',
// 		description: 'Senior Frontend Engineer Solve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...',
// 		keywords: ['angularjs', 'd3.js', 'javascript', 'ui', 'css'],
// 		company: 'ProsNSONE'
// 	},
// 	{
// 		id: 2,
// 		jobLocation: 'New York, NY',
// 		position: 'Other Job Thing',
// 		postDay: 'yesterday',
// 		description: 'Senior Frontend Engineer Solve Hard Problems With a Team of Infrastructure ProsNSONE is based in New York...',
// 		keywords: ['angularjs', 'd3.js', 'javascript', 'ui', 'css'],
// 		company: 'Cool Workplace'
// 	}
// ];
// var Posting = new PostingCollection();
// Posting.add(postings);

export default Company;



