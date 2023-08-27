//DOM variables
const resultDOM = document.querySelector(".result");

const lengthDOM = document.querySelector("#length");
const uppercaseDOM = document.querySelector("#uppercase");
const lowercaseDOM = document.querySelector("#lowercase");
const numbersDOM = document.querySelector("#numbers");
const symbolsDOM = document.querySelector("#symbols");

const generateDOM = document.querySelector("#generate-button");
const clipboardDOM = document.querySelector("#clipboard-button");

const labelDOM = document.querySelector("#password-length");

//variables
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const numberChar = "0123456789";
const symbolChar = "!@#$%^-&*()_/.,";

//functions
function generatePassword() {
  let password = "";
  let length = lengthDOM.value;
  let character = "";

  character += uppercaseDOM.checked ? upperChar : "";
  character += lowercaseDOM.checked ? lowerChar : "";
  character += numbersDOM.checked ? numberChar : "";
  character += symbolsDOM.checked ? symbolChar : "";

  for (i = 0; i < length; i++) {
    let random = Math.floor(Math.random() * character.length);
    password += character.substring(random, random + 1);
  }

  resultDOM.innerText = password;
}

async function copyPassword() {
  if (navigator.clipboard) {
    await navigator.clipboard.writeText(resultDOM.innerText);
    resultDOM.innerText = "Password copied!"
  }
}

//event listeners
generateDOM.addEventListener("click", generatePassword);
clipboardDOM.addEventListener("click", copyPassword);

lengthDOM.addEventListener("input", (e) => {
  labelDOM.innerText = "Password Length: " + e.target.value;
});
