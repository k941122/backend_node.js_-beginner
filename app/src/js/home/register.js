"use strict";

const id  = document.querySelector("#id"),
    name = documnet.querySelector("#name"),
    password = documnet.querySelector("#password"),
    confirmPassword = documnet.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register () {
    const req = {
        id: id.value,
        name: value,
        password: password.value,
        confirmPassword: confirmPassword.value,
    };

    fetch("/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(req)
    }).then((res) => res.json())
      .then((res) => {
        if (res.success) {
            location.href = "/login"
        } else {
            alert(res,msg);
        }
      })
      .catch((err) => {
        console.error(new Error("회원가입 중 에러가 발생했습니다."));
      });
}