// Function to perform addition
function add(num1, num2) {
    return num1 + num2;
}

// Function to perform subtraction
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to perform multiplication
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to perform division
function divide(num1, num2) {
    return num1 / num2;
}

// Main function for the calculator
function calculator() {
    var operation = prompt("Enter operation (+, -, *, /):");
    var num1 = parseFloat(prompt("Enter first number:"));
    var num2 = parseFloat(prompt("Enter second number:"));
    var result;

    if (operation === "+") {
        result = add(num1, num2);
    } else if (operation === "-") {
        result = subtract(num1, num2);
    } else if (operation === "*") {
        result = multiply(num1, num2);
    } else if (operation === "/") {
        if (num2 !== 0) {
            result = divide(num1, num2);
        } else {
            result = "Cannot divide by zero!";
        }
    } else {
        result = "Invalid operation!";
    }

    console.log("Result: " + result);
}

// Call the calculator function to start the calculator
calculator();
