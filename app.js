
// express 를 이용한 서버 만들기! 

const express = require("express");
const app = express();

app.get('/',(req,res) => {
    res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        여기는 루트입니다.
    </body>
    </html>`);
})

app.get('/login',(req,res) => {
    res.send(`<!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <input type="text" placeholder = "아이디"><br>
        <input type="text" placeholder = "아이디"><br>
        <button>로그인</button>
    </body>
    </html>`);
})

app.listen(3000,() => {
    console.log("서버 가동");
})

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
