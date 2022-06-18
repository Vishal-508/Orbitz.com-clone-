let pay = document.querySelector("#sk_details");
pay.addEventListener("onclick", userFun);



function userFun(event) {
    event.preventDefault();
    let name = document.getElementsByClassName("sk01").value;
    let lname = document.getElementsByClassName("sk02").value;
    let mob = document.getElementsByClassName("sk03").value;
    let con = document.getElementsByClassName("sk04").value;
    let con1 = document.getElementsByClassName("sk05").value;
    let cardN = document.getElementsByClassName("sk06").value;
    let cardNum = document.getElementsByClassName("sk07").value;
    let sc = document.getElementsByClassName("sk08").value;
    let email = document.getElementsByClassName("sk09").value;

    // let a = (name,mob,con,con1,card,email);
    // console.log(a);

    if (name == "" || mob == "" || con == "" || con1 == "" || cardN == "" || email == "" || lname == "" || cardNum == "" || sc == "") {
        alert("Please Enter Valid details.");
    } else {
        prompt("Enter OTP Here");
        window.location.href="success.html"
    }
}