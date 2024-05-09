// npx tsc QR-Code/script.ts
var qrinput = document.getElementById("qr-input");
var qrimg = document.getElementById("qr-img");
var qrbutton = document.getElementById("qr-button");
console.log(qrinput, qrimg, qrbutton);
qrbutton.addEventListener("click", function () {
    var inputValue = qrinput.value;
    console.log(inputValue);
    if (!inputValue) {
        alert("Please enter a valid URL");
        return;
    }
    else {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(encodeURIComponent(inputValue));
        qrimg.alt = "Qr code for ".concat(inputValue);
    }
});
