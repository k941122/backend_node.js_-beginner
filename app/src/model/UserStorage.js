"use strict";

class UserStorage {

    static users = {
        id: ["woorinIT","나개발","김팀장"],
        password: ["1234","1234","123456"],
        name: ["우리밋","나개발","김팀장"],
    };

    static getUsers(...filed) {
        const users = this.#users;
        const newUsers = field.reduce((newUsers,field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = [field];
            }
            return newUsers;
        },{})
        return ;
    }

}

module.exports = UserStorage;