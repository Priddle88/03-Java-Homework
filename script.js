// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  return;
};

// Add event listener to generate button
//Starts the code by clicking on the button and activating the WritePassword function)
generateBtn.addEventListener("click", writePassword);

// Letters for the passcode

    var passLLetters = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
    var passULetters = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
    var letterL = passLLetters.split(" ");
    var letterU = passULetters.split(" ");
    var sortedL = letterL.sort((a, b) => 0.5 - Math.random());
    var sortedU = letterU.sort((a, b) => 0.5 - Math.random());
    var newPassword = [];
  
//function to generate the password with a set criteria
function generatePassword() {
    //length of password
    var textLength = window.prompt("How many characters would you like for your new password? (8 - 128)");
    if (textLength < 8 || textLength > 128) generatePassword();

    var lowerCase = window.confirm("Would you like to have lower case letters?");
    var upperCase = window.confirm("Would you like to have upper case letters?");
    var numbers = window.confirm("Would you like to add numbers?");
    var specialChar = window.confirm("Would you like to add special characters?");

    

    var conditions = function(){
      
      for (i = 0; i < textLength; i++) {

        if (lowerCase) {
          newPassword.push(sortedL[i]);
        }
        if (upperCase) {
          newPassword.push(sortedU[i]);
        }

    
      };
    };

    conditions();
    console.log(newPassword);
    return password;
    return;
};