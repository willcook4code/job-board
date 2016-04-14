import CompanyCollection from './collections/company-collection.js';
import featured from './../assets/featured.jpg'
import featuredLogo from './../assets/featured-logo.jpg'

var Company = new CompanyCollection();

var companies = [
	{
		_id: 1,
		companyName: 'MaxPlay',
		companyLocation: 'Austin, TX',
		logo: 'https://raw.githubusercontent.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/master/images/featured-logo.jpg',
		banner: 'https://raw.githubusercontent.com/TIY-Austin-Front-End-Engineering/fresh-job-board-views/master/images/featured.jpg',
		featured: true
	},
	{
		_id: 2,
		companyName: 'Cool Workplace',
		companyLocation: 'New York, NY',
		logo: '',
		banner: '',
		featured: false
	}
];

Company.add(companies);



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



