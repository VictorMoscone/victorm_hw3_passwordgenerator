let generateBtn = document.querySelector("#generate");
let passContent = document.querySelector("#password");
let yourPassword = [];
    // Assigning yourPassword an empty array. Eventually this will contain our generated password.
let characterList = [
    // An array with nested arrays that will dictate what our password can and can't be.
    lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
    upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    digitsList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialList = [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"],
];
let resetList = characterList.slice();
    // We use this duplication of the chracterList to reset characterList when running promptTime function.

generateBtn.addEventListener("click", promptTime);
    // Add event listener to generate button that starts the whole process.

function promptTime() {
    characterList = resetList.slice();
    yourPassword = [];
    let passNum = parseInt(prompt("Yo. Pick a number between 8 and 128."));
    if (isNaN(passNum) || passNum < 8 || passNum > 128) {
        alert("Not a valid number. Try again.");
    } else {
        let lwrCaseOk = confirm("Want to buy some lowercase letters?");
            // This will either keep or remove all lowercase letters from the array.
            disableList(lwrCaseOk, lowerCaseList);
        let uprCaseOk = confirm("How about some uppercase letters?");
            // This will either keep or remove all uppercase letters from the array.
            disableList(uprCaseOk, upperCaseList);
        let numOk = confirm("Can we roll some numbers for ya?");
            // This will either keep or remove all digits from the array.
            disableList(numOk, digitsList);
        let specOk = confirm("Lastly, are special characters okay?")
            // This will either keep or remove all special characters from the array.
            disableList(specOk, specialList);
        if (characterList.length === 0) {
            // Stops the function if the user didn't choose any password elements.
            alert("You must choose at least 1 criteria. Try again.");
        } else {
            passwordGen(passNum);
            printPassword();
        }          

    }
}

function disableList(listType, listName) {
    // This will remove a property from our characterlist array if the user doesn't want it.
    if (listType == false) {
        let indexNum = characterList.indexOf(listName);
        characterList.splice(indexNum, 1); 
    }
}

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

function printPassword() {
    let passwordText = passContent;
    // Write password to the #password input
    let stringPassword = yourPassword.join("");
    // This combines each of the password results into one string with no seperators.
    passwordText.value = stringPassword;
    // Sets visible text to the end result; a password string.
}