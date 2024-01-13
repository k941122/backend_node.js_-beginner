"use strict"; //자바스크립트 생성시 ecma 스트릭트를 준수하겠다고 표시해야 함

const express = require("express");
const router = express.Router();

const strl = require("./home.ctrl");

router.get('/', ctrl.home );
router.get('/login', ctrl.login);
// 컨트롤러 ctrl 이름과 ctrl 파일 내부의 상수 이름이 같아야 한다.
module.exports = router;

// npm install ejs => ejs 파일을 실행하기 위해 필요함