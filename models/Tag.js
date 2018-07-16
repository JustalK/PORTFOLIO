const mongoose = require('mongoose')

//Define the tag schema
var tag = new mongoose.Schema(
	{
		name: {
			type: String
		}
	},
	{
		collection: 'tags'
	}
)

module.exports = mongoose.model('Tag', tag)