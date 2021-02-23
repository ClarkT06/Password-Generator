//Setting the global variables for the entire project 

var numberArray = ['0123456789']
var uppercaseArray = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var lowercaseArray = ['abcdefghijklmnopqrstuvwxyz']
var specialArray = ['!@#$%^&*()']


// Beginning questions for Selecting the password options needed
var passwordQuestions = function () {
  var passwordLength = window.prompt('How long do you want your password?\nSelect a number between 8 and 128');

  // Created prompt to reset the question if the parameter is below 8 or over 128 characters
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert('Must be between 8 and 128 characters, please try again.')
    return
  }
  // Created prompt if user inputs a non number
  if (isNaN(passwordLength)) {

    window.alert('Please enter numeric value, try again.')
    return
  }

  //Additional questions to get parameters of Password
  var passwordLower = window.confirm('Do you want lower Case Letters in your password\nOK for Yes or Cancel for No');
  var passwordUpper = window.confirm('Do you want UPPER Case letters in your password\nOK for Yes or Cancel for No');
  var passwordNumber = window.confirm('Do you want numbers in your password\nOK for Yes or Cancel for No');
  var passwordSpecial = window.confirm('Do you want special characters in your Password\nOK for Yes or Cancel for No');

  while (passwordUpper === false && passwordLower === false && passwordNumber === false && passwordSpecial == false) {
    alert("Please select at least one of the options for a secure password.")

    return
  }

  var Options = {

    length: passwordLength,
    lowercase: passwordLower,
    uppercase: passwordUpper,
    special: passwordSpecial,
    number: passwordNumber,

  }
  
  return Options

  //confirm=- true or false 
  //passwordCapital paswordUpper
  //after, store all questions into an object - then call function of password questions / then we acan manipulate array

}

var generatePassword = function () {
  // creats a variable and call objects 
  var passwordOptions = passwordQuestions()
  //
  var possibleChar = []
  var finalPassword = []
  if (passwordOptions.lowercase === true) {
    possibleChar.push(lowercaseArray)

  }
  if (passwordOptions.uppercase === true) {
    possibleChar.push(uppercaseArray)

  }

  if (passwordOptions.special === true) {
    possibleChar.push(specialArray)

  }
  if (passwordOptions.number === true) {
    possibleChar.push(numberArray)

  }

  for (var i = 0; i < passwordOptions.length; i++) {

    var randomChar = Math.floor(Math.random() * possibleChar.length)
    var randomElement = possibleChar[randomChar]
    finalPassword.push(randomElement)
  }
  return finalPassword.join('')

  //fix confirms and change messages and create arrays /
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //generatePassword isnt created 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// 4 arrays with lowercase letters, upper case, numbers, etc - near the top (global variables are on top outsdide of function)
//creats prompt function
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//