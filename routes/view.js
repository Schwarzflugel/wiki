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
// <%- body %>를 view.ejs에 넣어줘야 함
router.get('/:title', function(req, res){
	//와일드 카드로 문서 제목을 받아 DB내에서 문서를 찾는다
	Doc.findOne({title: req.params.title}, function(err, db){
		if (err){
			return res.json({
				success: false,
				message: err
			});
		}
		//db의 값이 null이면 /로 보내준다
		if (db !== null){
			res.render('view', {
				"title": req.params.title,
				"content": reTag(db.content),
				"created": db.created
			});
		}
		else {
			res.redirect('/');
		}
	});
});

module.exports = router;
