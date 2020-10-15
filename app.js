let characterList = {
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"],
    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    special: [" ", "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"],
}

let yourPassword = []

// console.log(characterList.letters.length)
// console.log(characterList.digits.length)
// console.log(characterList.special.length)

// console.log(Math.floor(Math.random() * 11));

function passwordGen(passwordLength) {
    for (let i = 0; i < passwordLength; i++) {
        let rL = Math.floor(Math.random() * characterList.letters.length);
        yourPassword.push(characterList.letters[rL]);
    }
}

passwordGen(10)

console.log(yourPassword);