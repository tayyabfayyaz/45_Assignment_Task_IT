// Name: Tayyab Fayyaz 
// Date: 20-feb-2024
// EXERSICE NO. 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var no = numbers_1[_i];
    var ordinalEnding = void 0;
    if (no == 1) {
        ordinalEnding = 'st';
    }
    else if (no == 2) {
        ordinalEnding = 'nd';
    }
    else if (no == 3) {
        ordinalEnding = 'rd';
    }
    else {
        ordinalEnding = 'th';
    }
    console.log("".concat(no).concat(ordinalEnding));
}
