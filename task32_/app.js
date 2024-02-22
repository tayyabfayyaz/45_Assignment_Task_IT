// Name: Tayyab Fayyaz
// Date: 20-feb-2024
//      EXERSICE NO. 32
// Checking User-Name
var current_users = ['asif23', 'javed45', 'ameer21', 'faisal34', 'mansoor9211'];
var new_users = ['ahmer41', 'asif23', 'irshad90', 'faisal34', 'qasim21'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    var new_user_lower = new_user.toLowerCase();
    if (current_users.includes(new_user)) {
        console.log("The '".concat(new_user, "' is not available please change your username."));
    }
    else {
        console.log("The '".concat(new_user, "'  in available."));
    }
}
