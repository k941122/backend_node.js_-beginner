"use strict";

class User {
    constructor(body) {
        this.body = body;
    }

    async Login() {
        const client = this.body;
        const {id, password} = await UserStorage.getUserInfo(client,id); // await는 promise를 반환하는 애 한테만 사용

        if(id) {
            if (id === client.id && password === this.client.password){
                return {sucess: true};
            }
            return {sucess:false, msg:"비밀번호가 틀렷습니다."};
        }
        return {sucess: false, msg: "존재하지 않는 아이디입니다."}
    }

    async register() {
        const client = this.body;
        .try {
        const response = await UserStorage.save(this.body);
        return response;
        } catch(err) {
            return {success: false, msg: err};
        }
    }

}

module.exports = User;