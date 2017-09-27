var count = 0;
function countItems (list) {
    var counter = 1;
    for (count = 0; count < list.length; count++) {
        counter++;
    }
    return counter;
}

var num= countItems( ["one", "two", "three"] );
console.log( "Count: " + num);
