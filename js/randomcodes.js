// RANDOM CODES

// Function to generate combination of characters
function generateCode() {
    // create variables to store generated codes and the type of characters we want to show as codes
    // initialize to null value
    var code = ' ';
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';

    // Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        // random select a character from the variable and then store in a new variable
        var char = Math.random() * str.length;
        // accumulate the generated character in to a string of 8 characters
        code += str.charAt(char);
    }
    // return the final accumulated string when loop ends
    return code;
}

// Get HTML elements to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton() {
    document.getElementById("submit").disabled = true;
}

// Activate function
disableButton();

