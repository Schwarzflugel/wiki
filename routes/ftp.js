var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var fs = require('fs');

router.get('/', function(req, res){
	res.render('upload');
});
router.post('/', function(req, res){
	//현재 디렉터리의 multipart 폴더 내에 업로드된 이미지를 저장한다
	var uploadFile = req.files.upload;
	var newName = 'media/' + uploadFile.name;
	fs.rename(uploadFile.path, newName, function(err){
		if (err){
			throw err;
		}
	});
	//파일 업로드 후 /upload로 이동
	res.redirect('/upload');
});

module.exports = router;
