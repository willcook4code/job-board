import Backbone from 'backbone';
import CompanyModel from './../models/company-model.js';


const CompanyCollection = Backbone.Collection.extend({
	model: CompanyModel
});


export default CompanyCollection;

