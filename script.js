window.onload = function() {

    var input = document.getElementById('input');
    var calculate = document.getElementById('calculate');

    var TotalVowels = 0;
    var totalAs = 0;
    var totalEs = 0;
    var totalIs = 0;
    var totalOs = 0;
    var totalUs = 0;
    var totalYs = 0;

    calculate.addEventListener('click', function() {
        var textToAnalyze = input.value;
        for (var i = 0; i < textToAnalyze.length; i++) {
            if(isVowel(textToAnalyze[i])) {
                TotalVowels++;
                incrementVowelcount(textToAnalyze[i]);
            }
        }

        document.getElementById('TotalVowels').innerHTML = TotalVowels;
        document.getElementById('PercentA').innerHTML = 'totalAs' / 'TotalVowels';
        document.getElementById('PercentE').innerHTML = 'totalEs' / 'otalVowels';
        document.getElementById('PercentI').innerHTML = 'totalIs' / 'TotalVowels';
        document.getElementById('PercentO').innerHTML = 'totalOs' / 'TotalVowels';
        document.getElementById('PercentU').innerHTML = 'totalUs' / 'TotalVowels';
        document.getElementById('PercentY').innerHTML = 'totalYs' / 'TotalVowels';

        TotalVowels = 0;
        totalAs = 0;
        totalEs = 0;
        totalIs = 0;
        totalOs = 0;
        totalUs = 0;
        totalYs = 0;



    function isVowel(letter) {
        letter = letter.toUpperCase();
        return letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U' || letter == 'Y';
    }

    function incrementVowelcount(letter) {
        letter = letter.toUpperCase();
        if (letter == 'A') {
            totalAs++;
        }
        else if (letter == 'E') {
            totalEs++;
        }
        else if (letter == 'I') {
            totalIs++;
        }
        else if (letter == 'O') {
            totalOs++;
        }
        else if (letter == 'U') {
            totalUs++;
        }
        else if (letter == 'Y') {
            totalYs++;
        }
    }
};;


