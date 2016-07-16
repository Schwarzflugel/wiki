var express = require('express');
var router = express.Router();
var main = require('../wiki');
var reTag = require('../function/tag');
var DB = main.wikiDB;

/*var datas = {
	content: reTag('==ASDF==\'\'\'ASDF\'\'\'\nASDF')
};*/
var data = /*datas.content*/reTag('==ASDF==');
router.get('/', function(req, res){
	res.render('view', {
		"body": data/*datas.content*/
	});
});
router.get('/:title', function(req, res){
	res.render('view', {
		"body": req.params.title
	});
});

module.exports = router;
