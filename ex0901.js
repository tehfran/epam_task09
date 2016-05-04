(function () {
    "use strict";
    var calculateButton = document.getElementById('distinct'),
        userInput = document.getElementById('userInput'),
        result = document.getElementById('result');
    
    function getDuplicateLetters(str) {
        var separator = [' ', '?', '!', ':', ';', '.', ',', '\t'],
            outArray = [],
            wordLetters = [],
            i;
        
        for (i = 0; i < str.length; i += 1) {
            if (separator.indexOf(str[i]) > -1) {
                wordLetters = [];
            } else if (wordLetters.indexOf(str[i]) > -1) {
                outArray.push(str[i]);
            } else {wordLetters.push(str[i]); }
        }
        
        return outArray;
    }
    
    function distinct(str) {

        var duplicates = getDuplicateLetters(str),
            outArray = [],
            i;

        for (i = 0; i < str.length; i += 1) {
            if (duplicates.indexOf(str[i]) === -1) {
                outArray.push(str[i]);
            }
        }
        return outArray.join("");
    }
    
    

   
    calculateButton.addEventListener('click', function () {
        result.innerHTML = distinct(userInput.value);
    });
}());