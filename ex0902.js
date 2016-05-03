(function () {
    "use strict";
    function parseString(str) {
        var output = [];
        if (/^[+\-]?\d+(?:\.?\d+)?(\s?[\-+*\/]\d+(?:\.?\d+)?)+\s?=$/.test(str)) {
            //*([+-]?\d+(?:\.\d+))\s?([-+*/])
            output = str.split(/([\-+*\/=])/);
            return output;
        }
        throw "Incorrect input";
    }

    function calculate(calc) {
        var currentOp,
            i,
            output = 0;
        for (i = 0; i < calc.length; i += 1) {
            currentOp = calc[i];
            switch (currentOp) {
            case "*":
                i += 1;
                output *= parseFloat(calc[i]);
                break;
            case "/":
                i += 1;
                output /= parseFloat(calc[i]);
                break;
            case "+":
                i += 1;
                output += parseFloat(calc[i]);
                break;
            case "-":
                i += 1;
                output -= parseFloat(calc[i]);
                break;
            case "=":
                return output;
            default:
                if (i === 0) {
                    output = parseFloat(calc[0]);
                }
                break;
            }
        }
        return output;
    }
    var calculateButton = document.getElementById('calculate'),
        userInput = document.getElementById('userInput'),
        result = document.getElementById('result');
    calculateButton.addEventListener('click', function () {
        try {
            result.innerHTML = calculate(parseString(userInput.value)).toFixed(2);
        } catch (exception) {
            result.innerHTML = exception.message;
        }
    });
}());



