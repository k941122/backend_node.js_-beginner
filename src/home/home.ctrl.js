"use strict";

const home= (req,res) => {
    res.render("home/index");
};

const login = (req,res) => {
    res.send("home/login");
};

module.exports = {
    hello,
    login,
};

/**
 * 
 * module.exports = {
 *    hello,
 *    login,
 * };
 * 
 * 객체에서 key:value 로 이루어 지는데,
 * key만 입력되 있을 경우 key:key 로 인식이 된다.
 * 
 */