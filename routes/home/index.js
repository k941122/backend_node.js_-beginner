"use strict"; //자바스크립트 생성시 ecma 스트릭트를 준수하겠다고 표시해야 함

const express = require("express");
const router = express.Router();

router.get('/',(req,res) => {
    res.render("home/index");
})

router.get('/login',(req,res) => {
    res.send("home/login");
})

module.exports = router;

// npm install ejs => ejs 파일을 실행하기 위해 필요함