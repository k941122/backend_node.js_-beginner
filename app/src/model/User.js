"use strict";

class User {
    constructor(body) {
        this.body = body;
    }

    Login() {
        const body = this.body
        const {id,password} = UserStorage.getUserInfo(body,id);

        if(id) {
            if (id === body.id && password === this.body.password){
                return {sucess: true};
            }
            return {sucess:false, msg:"비밀번호가 틀렷습니다."};
        }
        return {sucess: false, msg: "존재하지 않는 아이디입니다."}
    }

}

module.exports = User;