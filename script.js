window.onload = function() {
    
        var input = document.getElementById('input');
        var input = document.getElementById('calculate');
    
        var totalvowels = 0;
        var totalAs = 0;
        var totalEs = 0;
        var totalIs = 0;
        var totalOs = 0;
        var totalUs = 0;
        var totalYs = 0;
    
        calculate.addEventListener('click', function() {
            var textToAnalyze = input.value;
            for (var i = 0; i < textToAnalyze.length; i++) {
                if(isvowel(textToAnalyze[i])) {
                    TotalVowels++;
                    incrementVowelcount(textToAnalyze[i]);
                }
            }

            document.getElementById('TotalVowels').innerHTML = 'TotalVowels'
        });
    
        function isVowel(letter) {
            letter = letter.toUpperCase();
            return letter == 'A' || letter == 'E' || letter == 'I' || letter == 'O' || letter == 'U' || letter == 'Y';
                }

        function incrementVowelcount(letter) {
            letter = letter.toUpperCase(); 
            if(letter == 'A') {
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
    }
