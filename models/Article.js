const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the article schema
var article = new mongoose.Schema(
	{
		title: {
			type: String
		},
		slug: {
			type: String
		},
		tags: [{
			type: Schema.Types.ObjectId,
			ref: 'Tag'
		}]
	},
	{
		collection: 'articles'
	}
)

article.virtual('v_strTags').get(function() {
	for(var i=this.tags.length,tmpStringTags=[];i--;) {
		tmpStringTags.push(this.tags[i].name);
	}
	return tmpStringTags.join(',');
});
article.set('toObject', { virtuals: true });
article.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Article', article)