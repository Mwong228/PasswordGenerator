

var charLower = "abcdefghijklmnopqrstuvwxyz"
var charUpper = charLower.toUpperCase()
var charNumbers = "012345679"
var charSpecial = "!@#$%^&*()_+"

function generatePassword(){
  length = parseInt(prompt("What do you want the length of the password to be. Must be 8-128 characters."))
  if (length >= 8 && length <=128){
    passwordCriteria()
  }
  else{
    alert("Please enter a number between 8-128.")
  }

}

function passwordCriteria(){
  lower = confirm("Do you want lower case letters")
  upper = confirm("Do you want capital letters")
  num = confirm("Do you want numbers in the password")
  special = confirm("Do you want sepcial characters")
  // Generate character set with user input
  charSet(lower, upper, num, special)
  }

function charSet(lower, upper, num, special){
  let password = ""
  const typesCount= lower + upper + num + special
  console.log('typesCount: ', typesCount)
  const typesArr = [{lower}, {upper}, {num}, {special}].filter(item => Object.values(item)[0])
  console.log('typesArr: ', typesArr)

  if (typesCount === 0){
    return ""
  }
  for (let i=0; i < length; i+= typesCount){
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log("funcName: ", funcName)
      password += charSet[funcName]();
      

    })
  }

}

// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
