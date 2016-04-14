import Backbone from 'backbone';
import $ from 'jquery';

const PostingModel = Backbone.Model.extend({
	default: {
		company: '',
		jobLocation: '',
		position: '',
		postDay: '',
		description: '',
		keywords: []
	},
	rootUrl: 'http://tiny-za-server.herokuapp.com/collections/postings',
	idAttribute: 'id'
});

export default PostingModel;