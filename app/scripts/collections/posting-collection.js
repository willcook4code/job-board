import Backbone from 'backbone';
import PostingModel from './../models/posting-model.js';


const PostingCollection = Backbone.Collection.extend({
	model: PostingModel
});


export default PostingCollection;