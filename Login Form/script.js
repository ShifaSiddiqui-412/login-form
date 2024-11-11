let uname = document.querySelector("#uname");
let pass = document.querySelector("#pass");
let perror = document.querySelector("#perror");
let uerror = document.querySelector("#uerror");

let flag = false;

function formvalidate() {
    if (uname.value == "") {
        uerror.innerHTML = "User name is required"
        flag = false
    }
    else if (uname.value.length < 6) {
        uerror.innerHTML = "minimum 6 character required"
        flag = false
    }
    else {
        flag = true
        uerror.innerHTML = ""
    }



    if (pass.value == "") {
        perror.innerHTML = "Password should be 9 characters long"
        flag = false
    }
    else if (pass.value.length > 9) {
        perror.innerHTML = "Password should be 9 characters long"
        flag = false
    }
    else {
        flag = true
        perror.innerHTML = ""
    }
}
//return flag;




