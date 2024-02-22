// Name: Tayyab Fayyaz
// Date: 21-feb-2024


//      EXERSICE NO. 41

let magician_names: string[] = ['David Bellen', 'Dynamo', 'Harry Houdany', 'Derren Brown', 'Shin Lim'];

function show_magicians(magician_names: string[]): void {

    for (let magician_name of magician_names){
        console.log(magician_name);
    }

}
console.log("\n EXERSICE NO. 41 \n Original Magicians");
show_magicians(magician_names.slice());



//      EXERSICE NO. 42

function make_great(magician_names: string[]): string[] {

    let greatMagicians: string[] = [];
    for(let magician_name of magician_names){
    console.log(`\n Great ${magician_name}`);
    }
    return greatMagicians;
}
console.log("\n EXERSICE NO. \n 42 Great Magicians");
make_great(magician_names);

//      EXERSICE NO. 43

console.log("\n EXERSICE NO. \n 43 original Magicians (Unchange)");
show_magicians(magician_names.slice());