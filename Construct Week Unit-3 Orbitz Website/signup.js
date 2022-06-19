let mails = document.getElementById("sks_email");
let fname = document.getElementById("sks_fname");
let lname = document.getElementById("sks_lname");
let passw = document.getElementById("sks_pass");
let flag = 1;

document.querySelector("#sks_form").addEventListener("submit", signIn);
let dataArr = JSON.parse(localStorage.getItem("dataList")) || [];

function signIn(event) {
    event.preventDefault();

    // let dataObj = {
    //     fiName : document.querySelector("#sks_fname").value,
    //     laName : document.querySelector("#sks_lname").value,
    //     e_mail : document.querySelector("#sks_email").value,
    //     passwo : document.querySelector("#sks_pass").value,
    // };
    // dataArr.push(dataObj);
    // console.log(dataArr);
    // localStorage.setItem("dataList", JSON.stringify(dataArr));

    
    if (mails.value == "") {
        document.getElementById("mailErr").innerHTML = "Enter an email address";
        flag = 0;
    } else {
        document.getElementById("mailErr").innerHTML = "";
        localStorage.setItem("email",mails.value)
    }
    if (fname.value == "") {
        document.getElementById("fErr").innerHTML = "Enter a first name";
        flag = 0;
    }else {
        document.getElementById("fErr").innerHTML = "";
        localStorage.setItem("Fname", fname.value)
    }
    if (lname.value == "") {
        document.getElementById("lErr").innerHTML = "Enter a last name";
        flag = 0;
    } else {
        document.getElementById("lErr").innerHTML = "";
        localStorage.setItem("Lname", lname.value)
    }
    if (passw.value == "") {
        document.getElementById("pasErr").innerHTML = "Enter a password";
        flag = 0;
    }else {
        document.getElementById("pasErr").innerHTML = "";
        localStorage.setItem("password", passw.value)
    }

    if (flag){
        // localStorage.setItem("email",mails.value)
        // localStorage.setItem("Fname", fname.value)
        window.location.href = "./login.html"
        // localStorage.setItem("Lname", lname.value)
        // localStorage.setItem("password", passw.value)
        return true;

    } else {
        return false;
    }

    
}
// document.querySelector("#sks_form").addEventListener("submit", dataSubmit);
// let dataArr = JSON.parse(localStorage.getItem("dataList")) || [];

// function dataSubmit(event) {
//     event.preventDefault();
//     let dataObj = {
//         fiName : document.querySelector("#sks_fname").value,
//         laName : document.querySelector("#sks_lname").value,
//         e_mail : document.querySelector("#sks_email").value,
//         passwo : document.querySelector("#sks_pass").value,
//     };
//     dataArr.push(dataObj);
//     console.log(dataArr);
//     localStorage.setItem("dataList", JSON.stringify(dataArr));
// }
