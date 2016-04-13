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
	idAttribute: 'id'
});

export default CompanyModel;