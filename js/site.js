function getValues() {
    let userString = document.getElementById('userString').value;
    displayString(reverseString(userString));
}

function reverseString(input) {
    let revString = '';
    for (let i = input.length - 1; i >= 0; i--) {
        let letter = input[i];
        revString += letter;
    }
    return revString;
}

function displayString(output) {
    document.getElementById('results').textContent = output;
    document.getElementById('alert').classList.remove('invisible');
}