const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Define the article schema
var article = new mongoose.Schema(
	{
		title: {
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

module.exports = mongoose.model('Article', article)