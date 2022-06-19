// let userN = document.getElementById("sks_email1");
// let pass = document.getElementById("sks_pass1");
// let flag = 1;

// function checkIn(event) {
//     event.preventDefault()
//     if (userN.value == "") {
//         document.getElementById("emailErr").innerHTML = "Enter an email address";
//         flag = 0;
//     }else {
//         document.getElementById("emailErr").innerHTML = "";
//     }

//     if (pass.value == "") {
//         document.getElementById("passErr").innerHTML = "Enter a password";
//         flag = 0;
//     }else {
//         document.getElementById("passErr").innerHTML = "";
//     }

//     if (flag){
//         return true;
//     } else {
//         return false;
//     }
// }
function checkIn() {
    let userN = document.getElementById("sks_email1").value;
    let pass = document.getElementById("sks_pass1").value;

    let userE = localStorage.getItem("email");
    let pass1 = localStorage.getItem("password");

    if (userN == userE && pass == pass1) {
        alert("login successfully");
        // window.location.href="";
    } else {
        alert("email or password is incorrect.")
    }
}
