// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function to generate a random character from a given character set
function getRandomCharacter(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet.charAt(randomIndex);
}


// Function to prompt for password criteria
function getPasswordCriteria() {
    const length = parseInt(prompt("Enter password length (8-128 characters):"));

    // To validate password length
    if (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid password length between 8 and 128 characters.");
        return null;
    }

    const includeLowercase = confirm("Include lowercase letters?");
    const includeUppercase = confirm("Include uppercase letters?");
    const includeNumeric = confirm("Include numeric characters?");
    const includeSpecial = confirm("Include special characters?");

    // making sure atleast one character type is selected
    if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
        alert("Please select at least one character type.");
        return null;
    }

    return { length, includeLowercase, includeUppercase, includeNumeric, includeSpecial };
}

// Function to generate the password
function generatePassword() {
    const criteria = getPasswordCriteria();

    if (!criteria) {
        return; // Will be returned if criteria not provided or invalid
    }

    // Defined character sets for lowercase, uppercase, numeric, and special characters
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numericChars = "0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";

    // Create a combined character set based on selected criteria
    let charSet = "";
    if (criteria.includeLowercase) charSet += lowercaseChars;
    if (criteria.includeUppercase) charSet += uppercaseChars;
    if (criteria.includeNumeric) charSet += numericChars;
    if (criteria.includeSpecial) charSet += specialChars;

    // Generate the password
    let password = "";
    for (let i = 0; i < criteria.length; i++) {
        password += getRandomCharacter(charSet);
    }

    return password;
}

// Function to write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    if (password) {
        passwordText.value = password;
    }
}