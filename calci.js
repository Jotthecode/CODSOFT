let currentInput = '';

function appendToScreen(value) {
    currentInput += value;
    document.getElementById('screen').value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('screen').value = currentInput;
    } catch (e) {
        document.getElementById('screen').value = 'Error';
        currentInput = '';
    }
}

function clearScreen() {
    currentInput = '';
    document.getElementById('screen').value = '';
}
