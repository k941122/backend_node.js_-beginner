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

  static getUsers(...fileds) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = [field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    // const users = this.#users;
    fs.readfile("./src/database/uses.json")
      .then((data) => {
        retrun this.#getUserInfor(data,id);
      })
      .catch(console.error);
  }




  static save(userinfo) {
    const users = this.#users;
    users.id.push(userInfo, id);
    users.name.push(userInfo, name);
    users.password.push(userInfo, password);
  }
}

module.exports = UserStorage;
