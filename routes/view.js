var express = require('express');
var router = express.Router();
var main = require('../wiki');
var reTag = require('../function/tag');
var Doc = require('../DBModels/docModel');

/*var data = reTag('==ASDF==');
router.get('/', function(req, res){
	res.render('view', {
		"body": data
	});
});*/
router.get('/:title', function(req, res){
	Doc.findOne({title: req.params.title}, function(err, doc){
		if (err){
			return res.json({
				success: false,
				message: err
			});
		}
		res.render('view', {
			"title": req.params.title,
			"body": req.params.title
		});
	});
});

module.exports = router;
