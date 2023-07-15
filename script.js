// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterSets = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  specialChars: " !\"#$%&\'()*+-./:;<=>@[\\]^_{|}~",
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("How long do you want your password to be?");

  console.log(typeof(passwordLength));
  if (isNaN(passwordLength) || Number(passwordLength) < 8 || Number(passwordLength) > 128) {
    alert("Invalid Entry, please enter a number between 8 and 128 for the length.");
    return "Invalid Entry, Please Try Again";
  }

  var useUpperCase = confirm("Do you want to use upper case letters in your password?");
  var useLowerCase = confirm("Do you want to use lower case letters in your password?");
  var useNumbers = confirm("Do you want to use numbers in your password?");
  var useSpecialCharacters = confirm("Do you want to use special characters in your password?");
  var generatedPassword = "";


  var selectedCharacterSet= ""

  if (useUpperCase) {
    selectedCharacterSet += characterSets.upperCase;
  }
  if (useLowerCase) {
    selectedCharacterSet += characterSets.lowerCase;
  }
  if (useNumbers) {
    selectedCharacterSet += characterSets.numbers;
  }
  if (useSpecialCharacters) {
    selectedCharacterSet += characterSets.specialChars;
  }

  for (var i = 0; i <= passwordLength; i++) {
    var selectedIndex = Math.floor(Math.random() * selectedCharacterSet.length);
    generatedPassword += selectedCharacterSet[selectedIndex];
  }

  return generatedPassword;

}