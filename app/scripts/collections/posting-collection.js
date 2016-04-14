import Backbone from 'backbone';
import PostingModel from './../models/posting-model.js';


const PostingCollection = Backbone.Collection.extend({
	model: PostingModel,
	url: 'http://tiny-za-server.herokuapp.com/collections/postings'
});

let Posting = new PostingCollection();

export default Posting;