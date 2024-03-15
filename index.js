const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz"
const UPPERCASE_LETTERS = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
const NUMBERS = "1234567890"
const SYMBOLS = "!§$%&/()="

function generatePassword(length, 
                        includeLowerCase, 
                        includeUpperCase, 
                        includeNumbers, 
                        includeSymbols) {
    let pw = "";
    let accessableRange = ""
    accessableRange += includeLowerCase ? LOWERCASE_LETTERS : "";
    accessableRange += includeUpperCase ? UPPERCASE_LETTERS : "";
    accessableRange += includeNumbers ? NUMBERS : "";
    accessableRange += includeSymbols ? SYMBOLS : "";
    for (i = 0; i<length; i++) {
        randomIndex = Math.floor(Math.random() * accessableRange.length);
        let letter = accessableRange.charAt(randomIndex)
        pw = pw.concat(letter)
        // pkw += letter
    }
    return pw
}

length=10
includeLowerCase=true 
includeUpperCase=true 
includeNumbers=true 
includeSymbols=true

password = generatePassword(length, 
    includeLowerCase, 
    includeUpperCase, 
    includeNumbers, 
    includeSymbols)

console.log(`The generated password is ${password} with length ${password.length}`)