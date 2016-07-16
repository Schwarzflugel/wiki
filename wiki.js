//서버 기동을 위한 모듈 추가
var express = require('express');
var app = express();
//DB 연결을 위한 모듈 추가
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikiDB');
var wikiDB = mongoose.connection;
wikiDB.once('open', function(){
	console.log('DB connected');
});
wikiDB.on('error', function(res){
	res.redirect('/dbError');
});
//파싱을 위한 모듈 추가
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
//
var session = require('express-session');
var flash = require('connect-flash');
//
var path = require('path');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
	console.log('Server on');
});
