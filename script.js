// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//function to generate the password with a set criteria
function generatePassword() {
    //length of password
    var textLength = window.prompt("How many characters would you like for your new password? (8 - 128)");

    if (textLength < 8 || textLength > 128) { 
        generatePassword();
    } else {
    var lowerCase = window.confirm("Would you like to have lower case letters?");
    var upperCase = window.confirm("Would you like to have upper case letters?");
    var numbers = window.confirm("Would you like to add numbers?");
    var specialChar = window.confirm("Would you like to add special characters?");
    }

    

    return;
};
