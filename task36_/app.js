// Name: Tayyab Fayyaz
// Date: 21-feb-2024
//      EXERSICE NO. 36
// Function Types
function make_shirt(size, message) {
    console.log("\n You are order T-shirt size of ".concat(size, " and you want to print ").concat(message, " on this T-shirt"));
}
make_shirt("Medium", "\"Hello Wotld its my first Function program\"");
//      EXERSICE NO. 37
function new_make_shirt(size, message) {
    if (message === void 0) { message = "\"I love Typescript\""; }
    console.log(" \n You are order T-shirt size of ".concat(size, " and you want to print ").concat(message, " on this T-shirt"));
}
new_make_shirt("Large");
new_make_shirt("Medium");
