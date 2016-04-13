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
	idAttribute: 'id'
});

export default PostingModel;