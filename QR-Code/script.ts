const qrinput = document.getElementById("qr-input") as HTMLInputElement;
const qrimg = document.getElementById("qr-img") as HTMLImageElement;
const qrbutton = document.getElementById("qr-button") as HTMLButtonElement;

console.log(qrinput, qrimg, qrbutton);

qrbutton.addEventListener("click", () => {
  const inputValue = qrinput.value;
  console.log(inputValue);
  if (!inputValue) {
    alert("Please enter a valid URL");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      inputValue
    )}`;
    qrimg.alt = `Qr code for ${inputValue}`;
  }
});
