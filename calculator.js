document.addEventListener('DOMContentLoaded', function() {
    // Arithmetic functions
    function add(number1, number2) {
        return number1 + number2;
    }

    function subtract(number1, number2) {
        return number1 - number2;
    }

    function multiply(number1, number2) {
        return number1 * number2;
    }

    function divide(number1, number2) {
        if (number2 === 0) {
            return 'Error: Division by zero';
        }
        return number1 / number2;
    }

    // Get references to the input fields and buttons
    const number1Field = document.getElementById('number1');
    const number2Field = document.getElementById('number2');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');
    const calculationResult = document.getElementById('calculation-result');

    // Function to update the result
    function updateResult(result) {
        calculationResult.textContent = result;
    }

    // Function to get input values
    function getInputValues() {
        const number1 = parseFloat(number1Field.value) || 0;
        const number2 = parseFloat(number2Field.value) || 0;
        return { number1, number2 };
    }

    // Add event listeners for the buttons
    addButton.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = add(number1, number2);
        updateResult(result);
    });

    subtractButton.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = subtract(number1, number2);
        updateResult(result);
    });

    multiplyButton.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = multiply(number1, number2);
        updateResult(result);
    });

    divideButton.addEventListener('click', function() {
        const { number1, number2 } = getInputValues();
        const result = divide(number1, number2);
        updateResult(result);
    });
});