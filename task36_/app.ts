// Name: Tayyab Fayyaz
// Date: 21-feb-2024

//      EXERSICE NO. 36
// Function Types
function make_shirt(size: string, message: string): void {
    console.log(`\n You are order T-shirt size of ${size} and you want to print ${message} on this T-shirt`);
}

make_shirt(`Medium`, `"Hello Wotld its my first Function program"`);



//      EXERSICE NO. 37
function new_make_shirt(size: string, message: string = `"I love Typescript"`): void {

    console.log(` \n You are order T-shirt size of ${size} and you want to print ${message} on this T-shirt`);

}

new_make_shirt(`Large`);

new_make_shirt(`Medium`);
