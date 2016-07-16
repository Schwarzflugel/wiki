//서버 기동을 위한 모듈 추가
var express = require('express');
var app = express();
//DB 연결을 위한 모듈 추가
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wikiDB');
var wikiDB = mongoose.connection;
