function getwords () {

        var text = document.getElementById("text").value;


        var totalwords = 0;
        var totalsentences = 0;
        var avergagewords = 0;
        var totalspaces = 0;

        for (var i = 0; i < text.length; i++) {
                if (text[i] === ".") {
                    totalsentences++;
              }
        }
}