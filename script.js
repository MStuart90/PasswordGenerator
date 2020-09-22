var character = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "?", "/", "\\"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var Lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // console.log("button click")---- Need prompts
  var password = generatePassword().join("");
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



function generatePassword() {
  let passwordLength = parseInt(prompt("How long do you want the password to be?"));
  console.log(passwordLength)
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("The recommended length between 8 and 128. Please try again.");
    prompt("The recommended length between 8 and 128. Please try again.")

  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters?");
    confirmLowercase = confirm("Will this contain Lowercase letters?");
  };

  var result = [];
//   //Then when you want to add uppercase chars if they asked for them...
if (confirmUppercase) {
  result = result.concat(Uppercase)
}
if (confirmLowercase) {
  result = result.concat(Lowercase)
}
if (confirmNumber) {
  result = result.concat(number)
}
if (confirmCharacter) {
  result = result.concat(character)
}

  var password = [];

  for (var i = 0; i < passwordLength; i++) {
    var pickChoices = result[Math.floor(Math.random() * result.length)];
    password.push(pickChoices);
  }
  return password
}

generateBtn.addEventListener("click", writePassword);
