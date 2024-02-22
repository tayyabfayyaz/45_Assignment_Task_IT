// Name: Tayyab Fayyaz
// Date: 20-feb-2024


//      EXERSICE NO. 32
// Checking User-Name

let current_users: string[] = ['asif23', 'javed45', 'ameer21', 'faisal34', 'mansoor9211'];
let new_users: string[] = ['ahmer41', 'asif23', 'irshad90', 'faisal34', 'qasim21'];

for (let new_user of new_users){
    let new_user_lower = new_user.toLowerCase();
    if(current_users.includes(new_user)){
        console.log(`The '${new_user}' is not available please change your username.`);
    }else{
        console.log(`The '${new_user}'  in available.`);
    }
}