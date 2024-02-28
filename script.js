const passwordBox = document.querySelector("#password");
const generateBtn = document.querySelector("#btn")
const length = 12;
const copyPassword = document.querySelector("#copy")

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+";

// let password = "";

password += upperCase[Math.floor(Math.random() * upperCase.length)];
password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
password += number[Math.floor(Math.random() * number.length)];
password += symbol[Math.floor(Math.random() * symbol.length)];

const allChar = upperCase + lowerCase + number + symbol;



function generatePassword() {
  let password = "";
  while(password.length < length) {
    password += allChar[Math.floor(Math.random() * allChar.length)]
  }
  passwordBox.value = password;
  copyPassword.style.opacity = ".5"
}

function ctcb() {
  // passwordBox.value.select();

  navigator.clipboard.writeText(passwordBox.value);

  copyPassword.style.opacity = "1"
}
  // catch(e){
  //   console.log("Error Found" + e)
  // }


generateBtn.addEventListener("click", generatePassword);
copyPassword.addEventListener("click", ctcb);





