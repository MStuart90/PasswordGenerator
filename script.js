
var chars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "?", "/", "\\"];

var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// Assignment Code
var generateBtn = document.querySelector("#generate");
var useNumbers = confirm("Would you like to use numbers?")

// Write password to the #password input
function writePassword() {
  // console.log("button click")---- Need prompts
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passwordLength = parseInt(prompt("How long do you want the password to be?"));
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("password must be between 8 and 128");
  } else if (passwordLength > 8 || passwordLength < 128) {
    console.log("The recommended length between 8 and 128. Please try again.");
    prompt("The recommended length between 8 and 128. Please try again.")
  } 
}
 
var useNumbers = confirm("Would you like to use numbers?")

if (passwordLength < 8 || passwordLength > 128 ) {
  
  if (confirmChars) {
    passwordCharacters = passwordCharacters(Char)
    console.log(confirmChars)
  } else if (noConfirmChars) {
    console.log(noConfirmChars)
  }

  if (confirmNumbers) {
    passwordNumbers = passwordNumbers(Numbers)
    console.log(confirmNumbers)
  } else if (noConfirmNumbers) {
    console.log(noConfirmNumbers)
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters(alphaLower)
    console.log(confirmLowerCase)
  } else if (noLowerCase) {
    console.log(noLowerCase)
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters(alphaUpper)
    console.log(confirmUpperCase)
  } else if (noUpperCase) {
    console.log(noUpperCase)
  }

}
// return password


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function generatePassword (){
// var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLPNOPQRSTUVWXYZ!@#$%^&*()_+?><{}[]"
// var paswordLength = 16; 
// var password = "";

// for (var i=0; i<paswordLength; i++){
//   var randomNumber = Math.floor(Math.random() * chars.length);
//   password += chars.substring(randomNumber,randomNumer+1);
//   var randomNumb;
// }
// document.getElementsByID("Password").value = password
// }

// }