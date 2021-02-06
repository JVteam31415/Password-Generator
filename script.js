// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  if(password!="Your Secure Password"){
    window.alert("your password is "+passwordText.value);

  }

}

function generatePassword(){

  //length
  var len = window.prompt("Password length? (8-128)");

  // If user pressed Cancel, immediately end function
  if (!len ||(len<8) ||(len>128) ) {
    return;
  }

  //lower
  var lower = window.prompt("Use lowercase letters?(y/n)");
  if (!lower ) {
    return;
  }
  //upper
  var upper = window.prompt("Use UPPERCASE letters?(y/n)");
  if (!upper ) {
    return;
  }
  //number
  var numbers = window.prompt("Use numeric characters?(y/n)");
  if (!numbers ) {
    return;
  }
  //special
  var special = window.prompt("Use specifal characters?(y/n)");
  if (!special ) {
    return;
  }
  //check if any true
  var types = [];
  if(lower=="y"){
    types.push("lower");
  }
  if(upper=="y"){
    types.push("upper");
  }
  if(numbers=="y"){
    types.push("numbers");
  }
  if(special=="y"){
    types.push("special");
  }

  var chars = {
    "lower":"qwertyuiopasdfghjklzxcvbnm",
    "upper":"QWERTYUIOPASDFGHJKLZXCVBNM",
    "numbers":"1234567890",
    "special":"!@#$%^&*()-_=+:;,<.>/?`~"

  }
  if(types.length==0){
    window.alert("You didn't pick anything!");
    return "Your Secure Password";
  }

  var returnString="";
  //generate
  for(var i=0;i<len;i++){
    var typeChoice=types[Math.floor(Math.random()*types.length)];
    console.log(chars[typeChoice]+" "+typeChoice+" "+i+" "+len+" "+returnString);

    var charChoice = (chars[typeChoice]).charAt(Math.floor(Math.random()*(chars[typeChoice]).length));

    console.log(charChoice+" "+chars[typeChoice]);
    returnString = returnString.concat(charChoice);
  }
  return returnString;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
