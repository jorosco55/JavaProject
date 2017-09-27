function getstats () {

    var input = document.getElementById('input').value;
    var statistics = document.getElementById('stats');

    var totalwords = 0;
    var totalsentences = 0;
    var avergagewords = 0;
    var totalspaces = 0;


        for(var i = 0;
         i <= text.length; i++)
            if (text[i] == 'Total Words') {
            totalwords++;
        }



    document.getElementsByName('Average Words').innerHTML = totalwords / totalsenetences * 100;
    document.getElementById('Total Sentences').innerHTML = totalsentences;
    document.getElementById('Total Words').innerHTML = totalwords;
    document.getElementById('Total Spaces').innerHTML = totalspaces;


            function gettotalwords(totalwords, totalsentences) {
                return totalwords / totalsentences;
            }

}



