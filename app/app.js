
// express 를 이용한 서버 만들기! 

"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//포스트
const PORT = 3000;

//라우팅
const home = require("./src/routes/home");

// 앱세팅 
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`))
app.use(bodyParser.json());
// url을 통해 전달되는 데애터에 한글,공백 등과 같은 문자가 포함할 경우 제대로 인식되지 않는 문제가 해결.
app.use(bodyParser.urlencoded({extended: true}));


app.use("/",home); //use -> 미들 웨어를 등록해 주는 메서드

app.listen(PORT,() => {
    console.log("서버 가동");
})

module.exports = app;




/**
 * app.listen(3000,() =>< {}) 을 이용하면 서버가 만들어 진다.
 */

/**
 * node.js 의 v8엔진은 크롬 브라우저에서도 사용되는 
 * 자바스크립트 컴파일러 이다.
 * 
 * terminal창에 node app.js를 입력
 * 
 * npm install -s (노드 모듈과 패키지 설치 그리고 저장)
 * 
 * 다시 node app.js 입력하면 express 서버 실행됨
 * 
 * Cannot GET / => 서버 경로를찾을수 없다.
 * 
 * 
 *  ※ 서버 포트 설정과 브라우저 리스폰드 를 이용해
 *     해당 페이지 불러오기를 진행했음
 * 
 * ejs 를 이용하면 js에 삽입된 html을 분리하여 관리함으로써 
 * 더 효율적으로 코드 유지보수가 가능하다!
 */

// ------------------------------------------------------------


// http를 이용한 서버 만들기

// const http = require("http");  //http는 내장 모듈이라 node가 필요 없음
// const app = http.createServer((req,res) => {
//     res.writeHead(200,{"Content-Type":"text,html; charset=utf-8"})
//     // http로 서버를 구축하면 한글 자동 변환이 안되서 res.writeHead로 설정해 줘야 된다.
//     if(req,url === '/') {
//         res.end("여기는 루트 입니다.");
//     } else if(req,url === '/login') {
//         res.end("여기는 로그인 화면 입니다.")
//     }
// });

// app.listen(3001, () => {
//     console.log("http로 가동된 서버입니다.");
// });

// res,req 를 이용해서 사이트 지정을 하지 않으면 서버는 있지만 페이지가 보이지 않는다.
// http를 배운 이유는 express를 이용해서 서버를 구축하는 게 왜 편한지 알기 위해서 이다.
