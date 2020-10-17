let generateBtn = document.querySelector("#generate");
    // Assignment Code

function writePassword() {
    // Write password to the #password input
    let password = stringPassword;
    let passwordText = document.querySelector("#password");
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
    // Add event listener to generate button

let yourPassword = []
    // Assigning yourPassword an empty array.


let characterList = [
        lettersList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
        digitsList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        specialList = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"],
    ]     

function passwordGen(passwordLength) {
    // Function runs based on the password length number provided by the user.
    // Note to self: will need to write IF statements -> min of 8, max of 128.
    for (let i = 0; i < passwordLength; i++) {
        let whichList = Math.floor(Math.random() * characterList.length);
            // Rolls for 0 - 2 to determine which array I want to pull from.
        let bigRandomNumber = Math.floor(Math.random() * characterList[whichList].length);
            // randomly chooses a number between 1 and the length of the chosen array.
        yourPassword.push(characterList[whichList][bigRandomNumber]);
            // Finds which letter corresponds to the above random number and pushes it to an empty array.
    }
}

// // Additional notes to self for homework requirements:
//     - User chooses length.
//     - To include lowercase?
//     - To include uppercase?
//     - To include numerics?
//     - To include specials?
//     - I'm thinking that instead of a series of prompts, I want to just have checkboxes? If possible.

passwordGen(10)

let stringPassword = yourPassword.join("");
    // This combines each of the password results into one string with no seperators.
console.log(stringPassword);