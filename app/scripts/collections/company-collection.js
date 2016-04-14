import Backbone from 'backbone';
import CompanyModel from './../models/company-model.js';


const CompanyCollection = Backbone.Collection.extend({
	model: CompanyModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/companies'
});


export default CompanyCollection;

