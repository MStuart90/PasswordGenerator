
var characters = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "?", "/", "\\"];

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
  if (confirmNumbers) {
    passwordNumbers = passwordNumbers(Numbers)
    console.log(confirmNumbers)
  } else if (noConfirmNumbers) {
    console.log(noConfirmNumbers)
  }
  if (!enter) {
    alert("This needs a value");
} else if (enter < 8 || enter > 128) {
    // Validates user input
    // Start user input prompts
    enter = parseInt(prompt("You must choose between 8 and 128"));

} else {
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
};
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a something!");

}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
 
  choices = character.concat(number, Lowercase, Uppercase);
}

else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, Uppercase);
}
else if (confirmCharacter && confirmNumber && confirmLowercase) {

  choices = character.concat(number, Lowercase);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(Lowercase, Uppercase);
}
else if (confirmNumber && confirmLowercase && confirmUppercase) {
    choices = number.concat(Lowercase, Uppercase);
}

else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);

} else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(Lowercase);

} else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(Uppercase);
}
else if (confirmLowercase && confirmNumber) {
  choices = Lowercase.concat(number);

} else if (confirmLowercase && confirmUppercase) {
  choices = Lowercase.concat(Uppercase);

} else if (confirmNumber && confirmUppercase) {
  choices = number.concat(Uppercase);
}
else if (confirmCharacter) {
  choices = character;
}
else if (confirmNumber) {
  choices = number;
}
else if (confirmLowercase) {
  choices = Lowercase;
}

else if (confirmUppercase) {
  choices = space.concat(Uppercase);
};

var password = [];

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}



// if (passwordLength < 8 || passwordLength > 128 ) {
  
//   let confirmUpperChars = confirm("Would you like to include uppercase characters?");

//   //Then when you want to add uppercase chars if they asked for them...
//   if (confirmUpperChars) {
//     //do whatever you wanted to do.
//   } else {
//     //do what you wanted to do otherwise.
//   }

//   if (confirmNumbers) {
//     passwordNumbers = passwordNumbers(Numbers)
//     console.log(confirmNumbers)
//   } else if (noConfirmNumbers) {
//     console.log(noConfirmNumbers)
//   }

//   if (confirmLowerCase) {
//     passwordLowerCase = passwordLowerCase(alphaLower)
//     console.log(confirmLowerCase)
//   } else if (noLowerCase) {
//     console.log(noLowerCase)
//   }

//   if (confirmUpperCase) {
//     passwordUpperCase = passwordUpperCase(alphaUpper)
//     console.log(confirmUpperCase)
//   } else if (noUpperCase) {
//     console.log(noUpperCase)
//   }

// }
// // return password


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


// // function generatePassword (){
// // var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLPNOPQRSTUVWXYZ!@#$%^&*()_+?><{}[]"
// // var paswordLength = 16; 
// // var password = "";

// // for (var i=0; i<paswordLength; i++){
// //   var randomNumber = Math.floor(Math.random() * chars.length);
// //   password += chars.substring(randomNumber,randomNumer+1);
// //   var randomNumb;
// // }
// // document.getElementsByID("Password").value = password
// // }
// }
}

