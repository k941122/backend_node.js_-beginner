"use strict";

const fs = require("fs");
class UserStorage {

    static #getUserInfor() {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => {id,password,name}
        const userInfo = usersKeys.reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
        }, {});
    
        return userInfo;
      } //암호화 되어 있는 코드는 맨위로 올려줘야 된다.

  static #getUsers(data,isAll,fields) {
    if(isAll) return users;

    const newUsers = fields.reduce((newUsers, field) => {
        if (users.hasOwnProperty(field)) {
          newUsers[field] = [field];
        }
        return newUsers;
      }, {});
      return newUsers;
  }    

  static getUsers(isAll, ...fileds) {
    return fs
    .readfile("./src/database/uses.json")
    .then((data) => {
      return this.#getUsers(data,isAll,id);
    })
    .catch(console.error);


  }

  static getUserInfo(id) {
    // const users = this.#users;
    return fs.readfile("./src/database/uses.json")
      .then((data) => {
        return this.#getUserInfor(data,id);
      })
      .catch(console.error);
  }




  static async save(userinfo) {
    const users = await this.getUsers(true);
    if(users.id.includes(userInfo.id)) {
        return new Error(" 이미 존재하는 아이디입니다. ")
    }
    users.id.push(userInfo,id);
    users.name.push(userInfo,name);
    users.password.push(userInfo,password);
    fs.writeFile("./src/database/uses.json",JSON.stringify(users));
    return {success: true};

  }
}

module.exports = UserStorage;
