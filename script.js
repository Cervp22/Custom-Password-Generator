// Assignment code here
var characterLength = 8;
var choiceArr = [];
//start of the arrays/list of arrays.
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "o",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "O",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var specialCharArr = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "[",
  "]",
  "?",
  "-",
  "<",
  ">",
];
var numberArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }
}

//This funciton will run a for loop to generate a password with all the concatted arays and will return a password of random chosen characters.
function generatePassword() {
  var password = "";
  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
  }
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//This function will start the prompts for user to cofirm what kind of password they want. If the confirm is correct or user clicks Yes then the functionn will add the array on top to the choiceArr arrray leading to the password.
function getPrompts() {
  choiceArr = [];

  characterLength = parseInt(
    prompt(
      "How many characters do you want your password to be  (min 8 - max 128 characters)"
    )
  );
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert(
      "Character length has to be number, 8 - 128 digits. Please try again"
    );
    return false;
  }
  if (confirm("Would you like lower-case letters in your pasword?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Would you like upper case letters in your password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("Would you like special characters in your password?")) {
    choiceArr = choiceArr.concat(specialCharArr);
  }
  if (confirm("Would you like numbers in your password?")) {
    choiceArr = choiceArr.concat(numberArr);
  }
  return true;
}

//https://www.youtube.com/watch?v=v2jfGo7ztm8
