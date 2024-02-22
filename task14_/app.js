// Name: Tayyab Fayyaz
// Date: 18-feb-2024
//
//          EXERSICE NO. 14
var inviteList = ['Abdul Ahad', 'Ali Muhammad Khan', 'Abdul Sammad', 'Tahir Fayyaz'];
var message = ", Asalam Alaikom I want to you come on dinner and spend some time with my family.";
console.log("EXERSICE NO. 14");
console.log(inviteList[0] + message);
console.log(inviteList[1] + message);
console.log(inviteList[2] + message);
console.log(inviteList[3] + message);
// EXERSICE NO. 15
// Just Replaceing Array element:
inviteList[1] = 'Muhammad Tayyab';
var messagerefused = "Ali Muhammad Khan, refused my invitation so I replace his name form my invite list and send invitation to my best friend " + inviteList[1];
console.log("EXERSICE NO. 15");
console.log(messagerefused);
// EXERSICE NO. 16
// Add new element in midle of the Array:
var inviteListsecond = ['Abdul Ahad', 'Ali Muhammad Khan', 'Abdul Sammad', 'Tahir Fayyaz'];
inviteListsecond.push('Tariq Sheikh');
inviteListsecond.unshift('Babar Azam');
var secondMessage = ": This is new print set after  adding new elements in Array.";
console.log('EXERSICE NO. 16');
console.log(inviteListsecond[0] + secondMessage);
console.log(inviteListsecond[1] + secondMessage);
console.log(inviteListsecond[2] + secondMessage);
console.log(inviteListsecond[3] + secondMessage);
console.log(inviteListsecond[4] + secondMessage);
console.log(inviteListsecond[5] + secondMessage);
// EXERSICE NO. 17
// Shrinking Guest List
var shrinkingMessageExcuse = ": Sorry dear! I can invite only two people in my dinner table.";
console.log("EXERSICE NO. 17");
console.log(inviteListsecond[0] + shrinkingMessageExcuse);
console.log(inviteListsecond[1] + shrinkingMessageExcuse);
console.log(inviteListsecond[2] + shrinkingMessageExcuse);
console.log(inviteListsecond[3] + shrinkingMessageExcuse);
var shrinkingMessageInvite = ": Letting them know they are still in invite list.";
console.log(inviteListsecond[4] + shrinkingMessageInvite);
console.log(inviteListsecond[5] + shrinkingMessageInvite);
console.log("\n I remove all names from my inviting list so, I have an empty list.");
// EXERSICE NO. 19
//  inviteListsecond.indexOf('Babar Azam');
console.log("I inviting my " + inviteListsecond.indexOf('Tahir Fayyaz') + "Friends");
