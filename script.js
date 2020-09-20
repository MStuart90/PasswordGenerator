
var chars = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "?", "/", "\\"];

var Numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

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
 
 

if (passwordLength < 8 || passwordLength > 128 ) {
  
  if (confirmChars) {
    passwordCharacters = passwordCharacters(Char)
    return passwordLength
  } else if (noConfirmChars) {
    
  }

  if (confirmNumbers) {
    passwordNumbers = passwordNumbers(Numbers)
    return passwordLength
  } else if (noConfirmNumbers) {
    
  }

  if (confirmLowerCase) {
    passwordCharacters = passwordCharacters(alphaLower)
    return passwordLength
  } else if (noLowerCase) {
    
  }

  if (confirmUpperCase) {
    passwordCharacters = passwordCharacters(alphaUpper)
    return passwordLength
  } else if (noUpperCase) {
    
  }

}
return passwordLength
}

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