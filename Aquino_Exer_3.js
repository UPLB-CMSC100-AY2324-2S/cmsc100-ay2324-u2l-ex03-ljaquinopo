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


function storePassword(name, password1, password2) {
    // Check if both passwords are valid
    if (validatePassword(password1, password2)) {
        // If valid, return an object with the name and reversed password
        return {
            name: name,
            newpassword: reversePassword(password1), // Using the reversePassword function
        };
    } else {
        if(password1!=password2){
            return "Wrong Password";
        }else if(!checkPasswordLength(password1) && !checkPasswordLength(password2)){
            return "Insufficient Number of Strings!";
        }else if(!checkPasswordComplexity(password1) && !checkPasswordComplexity(password2)){
            return "Invalid Password";
        }
    }
}

console.log(storePassword("John", "Pass1234", "Pass1234") ); // returns {name: "John", newpassword:"4321ssaP"}
console.log(storePassword("John", "pass1234", "pass1234") ); // prompts “Invalid Password!”
console.log(storePassword("John", "pass1234", "pass1234567")); //prompts “Wrong Password!”
console.log(storePassword("John", "pass1", "pass1") ); //prompts “Insufficient Number of Strings!”



