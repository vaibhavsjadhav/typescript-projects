var input = document.getElementById("password");
var output = document.getElementById("output");
input.addEventListener("input", function () {
    console.log(input.value);
    var password = input.value;
    if (password.length < 8) {
        output.innerText = "Password is too short";
        output.style.color = "red";
    }
    else {
        // output.innerText = `Password is long enough`;
        // output.style.color = "green";
        console.log("is lowercase", password.search(/[a-z]/));
        //a-z
        //A-Z
        //0-9
        //special characters !@#$%^&*()_+~;':"`,.<>?/\|{}[]+
        if (password.search(/[a-z]/) == -1) {
            output.innerText = "password is missing a lowercase letter";
            output.style.color = "red";
        }
        else if (password.search(/[A-Z]/) == -1) {
            output.innerText = "Password is missing a Uppercase";
            output.style.color = "red";
        }
        else {
            output.innerText = "Password is strong";
            output.style.color = "green";
        }
    }
});
