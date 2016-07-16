var express = require('express');
var router = express.Router();
var main = require('../wiki');
var reTag = require('../function/tag');

var datas = {
	content: reTag('==ASDF==\'\'\'ASDF\'\'\'\nASDF')
};
var data = datas.content;
router.get('/', function(req, res){
	res.render('view', {
		data : datas.content
	});
});

module.exports = router;
