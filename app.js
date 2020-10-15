let characterList = {
    lettersList: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
    digitsList: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialList: [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"],
}

let yourPassword = []

// console.log(characterList.letters.length)
// console.log(characterList.digits.length)
// console.log(characterList.special.length)

// console.log(Math.floor(Math.random() * 11));

function passwordGen(passwordLength) {
    // Function runs based on the number provided by the user.
    for (let i = 0; i < passwordLength; i++) {
        let rL = Math.floor(Math.random() * characterList.lettersList.length);
            // randomly chooses a number between 1 and lettersList length.
        yourPassword.push(characterList.lettersList[rL]);
            // Finds which letter corresponds to the above random number and pushes it to an empty array.
    }
}

passwordGen(10)

let stringTest = yourPassword.join("");
    // This combines each of the password results into one string with no seperators.
console.log(stringTest);