"use strict";

const id  = document.querySelector("#id"),
    password = documnet.querySelector("#password"),
    loginBtn = document.querySelector("#button");

loginBtn.addEventListener("click",login);

function login () {
    const req = {
        id: id.value,
        password: password.value,
    };

    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req)
    }).then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = "/"
        } else {
            if(res.err) return alert(res.err);
            alert(res,msg);
        }
      })
      .catch((err) => {
        console.error(new Error("로그인중 에러가 발생했습니다."));
      });
}