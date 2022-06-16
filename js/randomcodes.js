// RANDOM CODES
// create variables to store generated codes and the type of characters we want to show as codes
// initialize to null value
var code = ' ';
// to store generated codes and initialize to empty value;
var getCode = ' ';
// for button boolean value
var btnvalue;
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
// Function to generate combination of characters
function generateCode() {
    // Generate character multiple times using a loop
    for (i = 1; i <= 8; i++) {
        // random select a character from the variable and then store in a new variable
        var char = Math.random() * str.length;
        // accumulate the generated character in to a string of 8 characters
        code += str.charAt(char);
    }
    // return the final accumulated string when loop ends
    // code = '1';
    return code;
}

// Get HTML elements to display
document.getElementById("codes").innerHTML = generateCode();

// Disable Button
function disableButton(btnvalue) {
    document.getElementById("subBtn").disabled = btnvalue;
    if (btnvalue == true) {
        document.getElementById("subBtn").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("subBtn").style.color = "rgba(255, 255, 255, 0.5)";
    } else {
        document.getElementById("subBtn").style.backgroundColor = "rgba(73, 119, 209, 1)";
        document.getElementById("subBtn").style.color = "rgba(255, 255, 255, 1)";
    }
}

var codebox = document.getElementById("codeentered");
codebox.addEventListener("input", evaluateCode);

function evaluateCode() {
    getCode = document.getElementById("codeentered").value;
    var charset1 = getCode.trim();
    var charset2 = code.trim();

    if (charset1.length == charset2.length && charset1 == charset2) {
        disableButton(false);
    }
}

// Activate function
disableButton();