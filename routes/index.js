var express = require('express');
var router = express.Router();
/*
    table_list 처리방법
    문서 ex)
    =문단 1=
    ==문단 1_1==
    =문단 2=
    번호처리 var number =1 ; if(정규표현식해줘서 =기호만 뽑아내기 == "="){  number++;}
    이런식으로

    footnote_list 각주처리방법
    스포일러 각주 일반각주 다 리스트에 넣는다
    번호처리 var number =1 ; if(스포일러 일반 판별 == 일반식){ number++;}

    편집문서와 html문서는 따로

    편집문서 -> html로 바꿀때
    넣어 줘야할 데이터 table_list, footnote_list
    위키 구현할때 각주랑 목차는 처리될때마다
    배열로 넣어주고 나중에 맨위 목차랑 맨아래 각주처리할때 넣어주세요
 */
/* GET home page. */
var list = "asdf";
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
