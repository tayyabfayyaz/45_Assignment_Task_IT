// Name: Tayyab Fayyaz
// Date: 21-feb-2024
//      EXERSICE NO. 44
var sandwiches = ['Chicken Sandwiche', 'Seafood Sandwiche', 'Grilled Cheese Sandwiche', 'Nutella Sendwiche', 'Roast Beef Sandwiche'];
function sandwiches_vriety(sandwiches) {
    for (var i = 0; i < sandwiches.length; i++) {
        sandwiches[i] += " Would you like ".concat(sandwiches[i]);
        console.log(sandwiches[i]);
    }
}
sandwiches_vriety(sandwiches);
