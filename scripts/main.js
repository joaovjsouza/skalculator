let resultElement = document.getElementById('result');

function clean() {
    resultElement.innerHTML = "";
}

function insert(character) {
    resultElement.innerHTML = resultElement.innerHTML + character;
}

function insertSpecialChar(character) {
    let lastChar = resultElement.innerHTML.charAt(resultElement.innerHTML.length - 1);

    if (resultElement.innerHTML !== '') {
        if (lastChar !== '-'
            && lastChar !== "+"
            && lastChar !== '*'
            && lastChar !== '/'
            && lastChar !== '.') {
            resultElement.innerHTML = resultElement.innerHTML + character;
        } else {
            let removedLastChar = resultElement.innerHTML.substring(0, resultElement.innerHTML.length - 1);
            resultElement.innerHTML = removedLastChar + character;
        }
    }
}

function deleteLastChar() {
    let actualValue = resultElement.innerHTML;
    resultElement.innerHTML = actualValue.substring(0, actualValue.length - 1);
}

function calculate() {
    let expression = resultElement.innerHTML;

    if (expression) {
        resultElement.innerHTML = eval(expression);
    }
}

