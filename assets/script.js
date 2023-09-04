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
    let charSet = "UTF-8";
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






// // Get references to HTML elements
// const generateButton = document.getElementById("generate");
// const passwordTextArea = document.getElementById("password");

// // Function to generate a random character from a given character set
// function getRandomCharacter(charSet) {
//     const randomIndex = Math.floor(Math.random() * charSet.length);
//     return charSet.charAt(randomIndex);
// }

// // Function to prompt for password criteria
// function getPasswordCriteria() {
//     const length = parseInt(prompt("Enter password length (8-128 characters):"));

//     // Validate password length
//     if (isNaN(length) || length < 8 || length > 128) {
//         alert("Please enter a valid password length between 8 and 128 characters.");
//         return null;
//     }

//     const includeLowercase = confirm("Include lowercase letters?");
//     const includeUppercase = confirm("Include uppercase letters?");
//     const includeNumeric = confirm("Include numeric characters?");
//     const includeSpecial = confirm("Include special characters?");

//     // Validate that at least one character type is selected
//     if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
//         alert("Please select at least one character type.");
//         return null;
//     }

//     return { length, includeLowercase, includeUppercase, includeNumeric, includeSpecial };
// }

// // Function to generate the password
// function generatePassword() {
//     const criteria = getPasswordCriteria();

//     if (!criteria) {
//         return; // Criteria not provided or invalid
//     }

//     // Define character sets for lowercase, uppercase, numeric, and special characters
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numericChars = "0123456789";
//     const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";

//     // Create a combined character set based on selected criteria
//     let charSet = "";
//     if (criteria.includeLowercase) charSet += lowercaseChars;
//     if (criteria.includeUppercase) charSet += uppercaseChars;
//     if (criteria.includeNumeric) charSet += numericChars;
//     if (criteria.includeSpecial) charSet += specialChars;

//     // Generate the password
//     let password = "";
//     for (let i = 0; i < criteria.length; i++) {
//         password += getRandomCharacter(charSet);
//     }

//     // Display the password
//     passwordTextArea.value = password;
// }

// // Event listener for the "Generate Password" button
// generateButton.addEventListener("click", generatePassword);









// // // Get references to HTML elements
// // const generateButton = document.getElementById("generate");
// // const passwordTextArea = document.getElementById("password");



// // // Function to generate a random character from a given character set
// // function getRandomCharacter(charSet) {
// //     const randomIndex = Math.floor(Math.random() * charSet.length);
// //     return charSet.charAt(randomIndex);
// // }

// // // Function to generate a random password based on predefined criteria
// // function generatePassword() {
// //     const length = 12; // You can change the default password length here

// //     // Defined character sets for lowercase, uppercase, numeric, and special characters
// //     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// //     const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// //     const numericChars = "0123456789";
// //     const specialChars = "!@#$%^&*()_+[]{}|;:',.<>?";

// //     // Create a combined character set based on predefined criteria
// //     const charSet = lowercaseChars + uppercaseChars + numericChars + specialChars;

// //     // Generate the password
// //     let password = "";
// //     for (let i = 0; i < length; i++) {
// //         password += getRandomCharacter(charSet);
// //     }

// //     // Display the generated password
// //     passwordTextArea.value = password;
// // }

// // // Event listener for the "Generate Password" button
// // generateButton.addEventListener("click", generatePassword);

// // // Initial generation of a password when the page loads
// // generatePassword();










// // // // Get references to HTML elements
// // // const generateButton = document.getElementById("generate");
// // // const passwordTextArea = document.getElementById("password");

// // // // Function to prompt for password criteria
// // // function getPasswordCriteria() {
// // //     const length = parseInt(prompt("Enter password length (8-128 characters):"));

// // //     // Validate password length
// // //     if (isNaN(length) || length < 8 || length > 128) {
// // //         alert("Please enter a valid password length between 8 and 128 characters.");
// // //         return null;
// // //     }

// // //     const includeLowercase = confirm("Include lowercase letters?");
// // //     const includeUppercase = confirm("Include uppercase letters?");
// // //     const includeNumeric = confirm("Include numeric characters?");
// // //     const includeSpecial = confirm("Include special characters?");

// // //     // Validate that at least one character type is selected
// // //     if (!(includeLowercase || includeUppercase || includeNumeric || includeSpecial)) {
// // //         alert("Please select at least one character type.");
// // //         return null;
// // //     }

// // //     return { length, includeLowercase, includeUppercase, includeNumeric, includeSpecial };
// // // }

// // // // Function to generate a random character from a given character set
// // // function getRandomCharacter(charSet) {
// // //     const randomIndex = Math.floor(Math.random() * charSet.length);
// // //     return charSet.charAt(randomIndex);
// // // }

// // // // Function to generate the password
// // // function generatePassword() {
// // //     const criteria = getPasswordCriteria();

// // //     if (!criteria) {
// // //         return; // Criteria not provided or invalid
// // //     }

// // //     // Build the character set based on selected criteria
// // //     let charSet = "";
// // //     if (criteria.includeLowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
// // //     if (criteria.includeUppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// // //     if (criteria.includeNumeric) charSet += "0123456789";
// // //     if (criteria.includeSpecial) charSet += "!@#$%^&*()_+[]{}|;:',.<>?";

// // //     // Generate the password
// // //     let password = "";
// // //     for (let i = 0; i < criteria.length; i++) {
// // //         password += getRandomCharacter(charSet);
// // //     }

// // //     // Display the password
// // //     passwordTextArea.value = password;
// // // }

// // // // Event listener for the "Generate Password" button
// // // generateButton.addEventListener("click", generatePassword);
