var mongoose = require('mongoose')

// Define the article schema
var article = new mongoose.Schema(
	{
		title: {
			type: String
		}
	},
	{
		collection: 'articles'
	}
)

module.exports = mongoose.model('Article', article)