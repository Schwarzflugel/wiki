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
var multipart = require('connect-multiparty');

app.set('view engine', 'ejs');

//현재 폴더를 최상위 폴더로 설정
app.use(express.static(path.join(__dirname, 'public')));
//업로드되는 파일을 __dirname/media폴더에 저장
app.use(multipart({
  uploadDir: __dirname + '/media'
}));

app.get('/dbError', function(){
	res.render('Error');
});
app.use('/upload', require('./routes/ftp'));
//app.use('/', require('./routes/login'));

app.listen(3000, function(){
	console.log('Server on');
});
