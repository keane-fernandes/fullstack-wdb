var number = 5; // in-line comment

/*  Data types and Variables
    
    undefined - variable that you have yet to define
    null - nothing
    boolean - true / false
    string - any sort of text
    symbol - immutable primitive value that is unique
    number - int / float
    object - can store different key/vale pairs
*/

/*  Var/Let/Const
    Var is function scoped - it ignores all {}, for(), if() inside the master {}
    Let and Const are block scoped - blocks include for loops, if conditions and sub functions

    Function scope is within the function
    Block scope is within curly brackets
*/

/*  Array Operations
    push()
    pop()
    shift() - Adds an item to end of an arry
    unshift()
*/

/*  
    push()
    pop()
    shift() - Adds an item to end of an arry
    unshift()
*/


// All code below here

var outerWear = "T-shirt";

function myOutfit() {
    var outerWear = "Sweater";
    return outerWear;
}

console.log(myOutfit())
console.log(outerWear)
