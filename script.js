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

// Letters for the passcode

    var passLetters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var letter = passLetters.split(" ");
    var sorted = letter.sort((a, b) => 0.5 - Math.random());

//function to generate the password with a set criteria
function generatePassword() {
    //length of password
    var textLength = window.prompt("How many characters would you like for your new password? (8 - 128)");

    if (textLength < 8 || textLength > 128) generatePassword();
    
    var lowerCase = window.confirm("Would you like to have lower case letters?");

    if (!lowerCase) letter.toUpperCase();

    var upperCase = window.confirm("Would you like to have upper case letters?");
    var numbers = window.confirm("Would you like to add numbers?");
    var specialChar = window.confirm("Would you like to add special characters?");

  
    console.log(letter);
    return false;
};
