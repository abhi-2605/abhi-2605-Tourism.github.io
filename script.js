var x = document.getElementById("email");
// var y = document.getElementById("password").value;
var z = document.getElementById("error");

function validation() {
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(email.value.trim())) {

        return true;
    } else {
        alert("email not valid");
        z.innerHTML = " Refresh the page and enter again";
        z.style.color = "red";
        return false;
    }


}


// function signvalidation() {
//     var v = document.getElementById("hu");
//     var w = document.getElementById("uh");
//     var q = document.getElementById("p");
//     var s = document.getElementById("r");

//     if (v.value.length < 8) {
//         q.innerText = "Less than 8 char";
//         q.style.color = "red";
//     }

//     if (v.value == w.value) {
//         return true;
//     } else {
//         s.innerText = "Confirmed passwod dosent match";
//         s.style.color = "red";
//         return false;
//     }
// }

function checkPass() {
    var pass1 = document.getElementById('pass1');
    var pass2 = document.getElementById('pass2');
    var message = document.getElementById('error-nwl');
    var goodColor = "#66cc66";
    var badColor = "#ff6666";

    if (pass1.value.length > 7) {
        pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "character number ok!"
    } else {
        pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " you have to enter at least 8 digit!"
        return;
    }

    if (pass1.value == pass2.value) {
        pass2.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "success!"
    } else {
        pass2.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " These passwords don't match"
    }
}
var k = document.getElementById("u");
var l = document.getElementById("eremail");

function emvalid() {
    var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if (regexp.test(u.value.trim())) {

        return true;
    } else {
        alert("email not valid");
        eremail.innerText = " Refresh the page and enter again";
        eremail.style.color = "red";
        return false;
    }


}
var myInput = document.getElementById("pass1");

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if ((myInput.value.match(lowerCaseLetters)) || (myInput.value.match(upperCaseLetters)) || (myInput.value.match(numbers))) {

        return true;
    } else {

        alert("Password Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters");
    }
}

var re = document.getElementById("phvalid");

function phonenumber(phvalid) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var phone = /^\d{10}$/;
    if ((re.value.match(phoneno)) || (re.value.match(phone))) {
        return true;
    } else {
        alert("Phone Number Invalid!");
        return false;
    }
}
var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
var z = document.getElementById("pass1");
var p = document.getElementById("eremail");

function str() {

    if (z.value == strongRegex) {
        alert("strong");
    } else {
        alert("weak");
        return;
    }




}