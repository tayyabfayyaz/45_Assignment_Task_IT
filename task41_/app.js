// Name: Tayyab Fayyaz
// Date: 21-feb-2024
//      EXERSICE NO. 41
var magician_names = ['David Bellen', 'Dynamo', 'Harry Houdany', 'Derren Brown', 'Shin Lim'];
function show_magicians(magician_names) {
    for (var _i = 0, magician_names_1 = magician_names; _i < magician_names_1.length; _i++) {
        var magician_name = magician_names_1[_i];
        console.log(magician_name);
    }
}
console.log("\n EXERSICE NO. 41 \n Original Magicians");
show_magicians(magician_names.slice());
//      EXERSICE NO. 42
function make_great(magician_names) {
    var greatMagicians = [];
    for (var _i = 0, magician_names_2 = magician_names; _i < magician_names_2.length; _i++) {
        var magician_name = magician_names_2[_i];
        console.log("\n Great ".concat(magician_name));
    }
    return greatMagicians;
}
console.log("\n EXERSICE NO. \n 42 Great Magicians");
make_great(magician_names);
//      EXERSICE NO. 43
console.log("\n EXERSICE NO. \n 43 original Magicians (Unchange)");
show_magicians(magician_names.slice());
