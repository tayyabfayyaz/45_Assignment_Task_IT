// Name: Tayyab Fayyaz
// Date: 20-feb-2024
// EXERCISE NO. 30
// "Admin" Greeting Program
var userName = ['Haris Rauf', 'Imad Wasim', 'Babar Azam', 'Admin', 'Imran Khan'];
if (userName.includes("Admin")) {
    console.log("Hello Admin! Would you like to see status report.");
}
else {
    console.log("Thanks for Loging in Again.");
}
//      EXERSICE NO. 31
//No User
delete userName[0];
delete userName[1];
delete userName[2];
delete userName[3];
delete userName[4];
console.log(userName);
console.log("We need to find some users.");
