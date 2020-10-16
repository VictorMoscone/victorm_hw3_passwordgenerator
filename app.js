let characterList = {
    lettersList: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
    digitsList: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialList: [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"],
    arrayList: ["lettersList", "digitsList", "specialList"],
}

console.log(characterList.arrayList);

let yourPassword = []

// console.log(characterList.lettersList.length)
// console.log(characterList.digitsList.length)
// console.log(characterList.specialList.length)

function passwordGen(passwordLength) {
    // Function runs based on the password length number provided by the user.
    for (let i = 0; i < passwordLength; i++) {
        let whichList = Math.floor(Math.random() * characterList.arrayList.length);
        console.log(whichList);
            // Rolls for 0 - 2 to determine which array I want to pull from.
        let chosenArray = characterList.arrayList[whichList];
            // Assigns the selected array to chosen array.
        console.log(chosenArray);
        let bigRandomNumber = Math.floor(Math.random() * characterList.chosenArray.length);
            // randomly chooses a number between 1 and the length of the chosen array.
            // this code is not working.
        console.log(bigRandomNumber);
        yourPassword.push(characterList.chosenArray[bigRandomNumber]);
            // Finds which letter corresponds to the above random number and pushes it to an empty array.
    }
}

passwordGen(10)

let stringTest = yourPassword.join("");
    // This combines each of the password results into one string with no seperators.
console.log(stringTest);