"use strict";

class User {
    constructor(body) {
        this.body = body;
    }

    async Login() {

        function register () {
            if(!id.value) return alert("아이디를 입력해주십시오.");
            if (!password.value) return alert("비밀번호가 입력해주십시오.");

        const client = this.body;
        try{;
        const {id,password} = await UserStorage.getUserInfo(client,id); // await는 promise를 반환하는 애 한테만 사용

        if(id) {
            if (id === client.id && password === this.client.password){
                return {sucess: true};
            }
            return {sucess:false, msg:"비밀번호가 틀렷습니다."};
        }
        return {sucess: false, msg: "존재하지 않는 아이디입니다."};
    }catch(err) {
        return {success:false, err};
    }
    }

    async register() {
        const client = this.body;
        try {
        const response = await UserStorage.save(this.body);
        return response;
        } catch(err) {
            return {success: false, err};
        }
    }

}

module.exports = User;

/**
 * 함수는 한가지 기능만 수행 하도록 구현
 * 
 * promise로 만들지 않으면 하나의 함수에서 여러 기능을 수행해 버리는
 * "이도저도 아닌 코드"가 제작
 * 
 * 클래스(class)는 User와 UserStorage 처럼 각자의 역할을 구분해 줘야됨
 */