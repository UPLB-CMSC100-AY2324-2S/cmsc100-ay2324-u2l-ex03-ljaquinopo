// This function checkPasswordLength takes a password as input and returns true if it has at least 8 characters, and false 
function checkPasswordLength(password) {
    return password.length >= 8;
}

function checkPasswordComplexity(password) {
    // Initialize flags to track whether the password has at least one number, one uppercase character, and one lowercase character
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;

    // Iterate through each character of the password
    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        // Check if the character is a number
        if (!isNaN(parseInt(char))) {
            hasNumber = true;
        } 
        // Check if the character is uppercase
        else if (char === char.toUpperCase()) {
            hasUpperCase = true;
        } 
        // Check if the character is lowercase
        else if (char === char.toLowerCase()) {
            hasLowerCase = true;
        }
    }

    // Return true if the password meets all complexity requirements, false otherwise
    return hasNumber && hasUpperCase && hasLowerCase;
}

function validatePassword(password1, password2) {
    // Check if passwords match, checks the complexity, and also checks the password length
    if (password1 === password2 && checkPasswordComplexity(password1) && checkPasswordLength(password1)) {
        return true; // Return true if passwords match
    } else {
        return false; // Return false if passwords don't match
    }
}

function reversePassword(password) {
    let reversedPassword = ""; // Initialize an empty string to store the reversed password
    
    // Iterate through each character of the password in reverse order
    for (let i = password.length - 1; i >= 0; i--) {
        reversedPassword += password[i]; // Concatenate each character to the reversed password string
    }
    
    return reversedPassword; // Return the reversed password
}


