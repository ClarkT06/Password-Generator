
var passwordQuestions = function() {
var passwordLength = window.prompt('How long do you want your password?');
if (passwordLength < 8 || passwordLength > 128)  {
  window.alert('Password too short, please try again.')
  return
}
if (isNaN(passwordLength)) {

  window.alert('Please enter numeric value, try again.')
  return
}
//var passwordLower = window.prompt('How long do you want your password?');
var passwordUpper = window.confirm('Do you want Upper Case letters in your password');
var passwordNumber = window.prompt('Do you want Lower Case Letters in your password');
var passwordSpecial = window.prompt('Do you want special characters in your Password');

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

var generatePassword = function(){
// creats a variable and call objects 
var passwordOptions = passwordQuestions() 
//
var possibleChar = [] 
var finalPassword = []
if (passwordOptions.lowercase === true) {
  possibleChar.push(lowerCaseArray) //adding lowercase array to possible char - need to create

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

for (var i=0; i<passwordOptions.length; i++){

  var randomChar = Math.floor(Math.random()*possibleChar.length)
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