// // while loop er khetre break 

var i = 0;

while (i < 15) {

    console.log(i);
    // mone koro amra cacchi i==5 hoile loop ta bondho hoye jabe 
    if (i == 5) {
        break;
    }
    i++;
}


// // for loop er khetre break 
for (var i = 0; i < 15; i++) {

    console.log(i);
    if (i == 10) {
        break;
    }
}







// // array te break er kag

var numbers = [12, 13, 14, 15, 16, 17, 100, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {

    var number = numbers[i];
    console.log(number);

    if (number > 99) {
        break;
    }

}





var numbers = [12, 13, 98, 16, 17, 100, 19, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 90) {
        continue;
    }
    console.log(number);
}