var mongoose = require('mongoose');

var docSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

var Doc = mongoose.model('doc', docSchema);

module.exports = Doc;
