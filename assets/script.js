// Getting elements from HTML DOM to Javacript
var includeLength = document.getElementById("length");
var includeUppercase = document.getElementById("uppercase");
var includeNumbers = document.getElementById("numbers");
var includeSymbols = document.getElementById("symbols");
var passwordResult = document.getElementById("password"); //Text area
var generateBtn = document.querySelector("#generate"); //Button
var form = document.getElementById("password-form")
console.log(form);

//Creating an array of Characters, this values will be later be taken from ASCII table
var upperCase = arrayFromASCII(65, 90);  //Call funtion and give values that belong to fromCharCode method, which will be used later
var lowerCase = arrayFromASCII(97, 122);
var numbersArray = arrayFromASCII(48, 57);
var symbolArray = arrayFromASCII(33, 47) 
.concat(arrayFromASCII(58, 64))
.concat(arrayFromASCII(91, 96))
.concat(arrayFromASCII(123, 126));

function arrayFromASCII(low, high){   //Create an array with the values above
  var array = [];
  
  for(var i = low; i <= high; i++){
    array.push(i);  //.push will push values to array
  }
  return array;
}

console.log(upperCase);
console.log(lowerCase);
console.log(numbersArray);
console.log(symbolArray); //Complete array from 33 to 126

//Checking selected options in the form
form.addEventListener('submit', e => {
  e.preventDefault()                    //Use this API method to prevent default behavior of reloading the page every time the button is clicked
  var passwordLength = includeLength.value
  var passwordUppercase = includeUppercase.checked
  var passwordNumbers = includeNumbers.checked
  var passwordSymbols = includeSymbols.checked

  var password = generatePassword(passwordLength, passwordUppercase, passwordNumbers, passwordSymbols); 

passwordResult.value = password
console.log(form);
})



//Password generating Function, these will be the parameter needed in the generatePassword function above.   

var generatePassword = (passwordLength, passwordUppercase, passwordNumbers, passwordSymbols) =>{
  var charCodes = lowerCase; //Declare charCodes as a variable and assign lowerCase array done from ASCII
  if(passwordUppercase) charCodes = charCodes.concat(upperCase); //IF passwordUppercase is clicked, add upperCase array done from ASCII
  if(passwordNumbers) charCodes = charCodes.concat(numbersArray); //IF passwordNumbers is clicked, add numbersArray array done from ASCII
  if(passwordSymbols) charCodes = charCodes.concat(symbolArray);  //IF passwordSymbols is clicked, add symbolArray array done from ASCII

  console.log(Object.values(lowerCase));//Just to check values in charCode object 

  var passwordCharacters = []; //initialize an Array

  for( var i = 0; i < passwordLength; i++){    // Loop will run as many times as passwordLength value
    var randomCode = charCodes[Math.floor(Math.random() * charCodes.length )]; //Then will look through charCodes object which contains an array and return random values from that array to be stored in randomCode
    passwordCharacters.push(String.fromCharCode(randomCode)); // .push will push characters to the array

    console.log(typeof randomCode);
  }
  return passwordCharacters.join(" "); //.join(" ") will convert the array to a string so it will have spaces in between
};



