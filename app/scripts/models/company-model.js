import Backbone from 'backbone';
import $ from 'jquery';

const CompanyModel = Backbone.Model.extend({
	default: {
		companyName: '',
		companyLocation: '',
		logo: '',
		banner: '',
		featured: false
	},
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/companies',
	idAttribute: '_id'
});

export default CompanyModel;

