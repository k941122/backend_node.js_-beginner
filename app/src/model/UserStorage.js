"use strict";

const db = require("../config/db");
class UserStorage {   


  static getUserInfo(id) {
    return new Promise((reserve,reject) => {
      const query = "SELECT * FROM users WHERE id = ?; ";
      db.query(query,[id], (err,data) => {
        if(err) reject(`${err}`);
        resolve(data);
      });
    });

  }




  static async save(userinfo) {
    return new Promise((reserve,reject) => {
      const query = "INSERT INTO users(id, name, filed) VALUES(?,?,?);";
      db.query(
        query,
        [userInfo.id,userInfo.name,userInfo.password], 
        (err) => {
        if(err) reject(`${err}`);
        resolve({success: true});
      });
    });

  }
}

module.exports = UserStorage;
