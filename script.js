
var charLower = "abcdefghijklmnopqrstuvwxyz"
var charUpper = charLower.toUpperCase()
var charNumbers = "012345679"
var charSpecial = "!@#$%^&*()_+"

//These 4 functions generate a random value for the letter/numbers/symbols in its range
function randomLower() {
  var charLower = "abcdefghijklmnopqrstuvwxyz"
  return charLower[Math.floor(Math.random() * charLower.length)]
}

function randomUpper() {
  var charUpper = charLower.toUpperCase()
  return charUpper[Math.floor(Math.random() * charUpper.length)]
}

function randomNumber() {
  var charNumbers = "012345679"
  return charNumbers[Math.floor(Math.random() * charNumbers.length)]
}

function randomSpecial() {
  var charSpecial = "!@#$%^&*()_+"
  return charSpecial[Math.floor(Math.random() * charSpecial.length)]
}

//Creating a character set with the values generated at random
var charSet = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  special: randomSpecial,
}

//Asks user to input a command to identify how long the password length needs to be. If length does not meet the requirement, the code will stop running and user will have to input information again by clicking the "Generate Password" button
function passwordLength() {
  length = parseInt(prompt("What do you want the length of the password to be. Must be 8-128 characters."))
  if (length >= 8 && length <= 128) {
    passwordCriteria()
  }
  else {
    alert("Please enter a number between 8-128.")
  }

}

function passwordCriteria() {
  userLower = confirm("Do you want lower case letters")
  userUpper = confirm("Do you want capital letters")
  userNumber = confirm("Do you want numbers in the password")
  userSpecial = confirm("Do you want sepcial characters")
  // Generate character set for password given user input
  generatePassword(userLower, userUpper, userNumber, userSpecial, length)
}

//Generate password function with the pass through of password criteria. Filters out unchecked categories from user and loops over function for each type
function generatePassword(lower, upper, number, special, length) {
  var password = '';
  var typesCount = lower + upper + number + special
  //Gives the array a true or false value and filters out all false values to identify which criteria the user picked
  var typesArr = [{ lower }, { upper }, { number }, { special }].filter(item => Object.values(item)[0])

  //If no options are picked, password cannot be generated so user will have to start over
  if (typesCount === 0) {
    alert("Please redo and pick an option")
  }
  //Loops array for each type and uses the character set from the above function to generate a password
  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      var funcName = Object.keys(type)[0]
      password += charSet[funcName]();
    });
  }
  //Append final password to the html text area
  document.getElementById('password').value = password
}
