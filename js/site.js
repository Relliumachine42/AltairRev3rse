function getValues() {
    let userString = document.getElementById('userString').value;
    // let revString = reverseString(userString);
    displayString(reverseString(userString));
}

function reverseString(input) {
    // let strArray = input.split('');
    // return strArray.reverse().join('');
    let revString = '';
    for (let i = input.length - 1; i >= 0; i--) {
        let letter = input[i];
        revString += letter;
    }
    return revString;
}

function displayString(output) {
    document.getElementById('results').textContent = output;

    let alertBox = document.getElementById('alert');

    alertBox.classList.remove('invisible');
}