/* 
    Function Expressions
*/

const square = function (num) {
    return num * num;
}

square(7); // 49

/* 
    Function as Arguments
*/

function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log("HAHAHAHAHAHAHA");
}

callTwice(laugh) // pass a function as an arg
// HAHAHAHAHAHAHA
// HAHAHAHAHAHAHA

const math = {
    multiply: function (x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    },
    square: function (x) {
        return x * x;
    },
}

const person = {
    first: 'Robert',
    last: 'Herjavec',
    fullName() {
        return `${this.first} ${this.last}`
    }
}

person.fullName(); // Robert Herjavec
person.last = "Plant";
person.fullName(); //Robert Plant


const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Keane");

/* 
    forEach()
    Accepts a callback function. Calls the functions once per element in the array.
*/
nums.forEach(number => {
    console.log(number * 2);
    //prints: 18, 16, 14, 12, 10, 8, 6, 4, 2
});

nums.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
        //prints: 8, 6, 4, 2
    }
})

/* 
    map()
    Creates a new array with the results of calling a callback on every element in the array
*/
const texts = ['rofl', 'lol', 'omg', 'ttyl'];
const caps = texts.map(function (t) {
    return t.toUpperCase();
})

texts; //['rofl', 'lol', 'omg', 'ttyl'];
caps; //['ROFL', 'LOL', 'OMG', 'TTYL'];

const square = (x) => {
    return x * x;
}

const sum = (x, y) => {
    return x + y;
}

// Parentheses are optional if there's only one parameter
const square = x => {
    return x * x;
}

// Use empty parentheses for functions without parameters
const singSong = () => {
    return "LAALALALALALA";
}

// Regular function expression
const isEven = function (num) {
    return num % 2 === 0;
}

// Arrow Function with Parantheses around Parameters
const isEven = (num) => {
    return
}

// No Parantheses around Parameters
const isEven = num => {
    return
}

// One Liner Implicit Return
const isEven = num => num % 2 === 0;

let movies = [
    "The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Dobtfire",
    "Mr. Deeds"
]

let movie = movies.find(movie => {
    return movie.includes('Mrs.');
}) // Mr and Mrs. Smith

let movie2 = movies.find(m => m.indexOf('Mrs') === 0);
//    Mrs. Doubtfire

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// Callback returns true or false
// If it returns true, n is added to the filtered array
const odds = nums.filter(n => {
    return n % 2 === 1;
})
// [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5);
// [4, 3, 2, 1]

const words = ["dog", "dig", "log", "bog", "wag"];

words.every(word => {
    return word.length === 3;
}) // True

words.every(word => word[0] === 'd'); // False

words.every(word => {
    let lastLetter = word[word.length - 1];
    return last_letter === 'g'
}) // True

const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

words.some(word => {
    return word.length > 3;
}) // True

words.some(word => word[0] === 'Z'); // False

words.some(word => word.includes('cake')) // True

[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

let grades = [89, 96, 58, 77, 62, 93, 81, 99, 73];

const topScore = grades.reduce((max, currentValue) => {
    if (currentValue > max) {
        return currVal;
    }
    return max;
})

topScore; // 99

[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
// RETURNS: 30

[4, 5, 6, 7, 8].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100)
// RETURNS: 130

function multiply(a, b = 1) {
    return a * b;
}

multiply(4); //4
multiply(4, 5); //20

const nums = [9, 3, 2, 8];
Math.max(nums); // NaN
// With spread
Math.max(...nums)

const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

[...nums1, ...nums2];
// [1, 2, 3, 4, 5, 6]

['a', 'b', ...nums2];
// ["a", "b", 4, 5, 6]

[...nums1, ...nums2, 7, 8, 9];
// [1, 2, 3, 4, 5, 6, 7, 8, 9]

const feline = { legs: 4, family: 'Felidae' };
const canine = { family: 'Caninae', furry: true };

const dog = { ...canine, isPet: true }
// { family: 'Caninae', furry: true, isPet: true };

const lion = { ...feline, genus: 'Panthera' };
// { legs: 4, family: 'Felidae', genus: 'Panthera' };

const catDog = { ...feline, ...canine };
// { legs: 4, family: 'Caninae', furry: true };

function sumAll(...nums) {
    let total = 0;
    for (let n of nums) total += n;
    return total;
}

sumAll(1, 2); // 3
sumAll(1, 2, 3, 4, 5); // 15

const raceResults = ['Eliud Kipchoge', 'Feyisa Lelisa', 'Galen Rupp'];

const [gold, silver, bronze] = raceResults;

gold; // 'Eliud Kipchoge'
silver; // 'Feyisa Lelisa'
bronze; // 'Galen Rupp'

const runner = {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
    title: "Elder of the Order of the Golden Heart of Kenya"
}

const { first, last, country } = runner;

first; // Eliud
last; // Kipchoge
country; // Kenya

const fullName = ({ first, last }) => {
    return `${first} ${last}`
}

const runner = {
    first: "Eluid",
    last: "Kipchoge",
    country: "Kenya"
}

fullName(runner); // "Eliud Kipchoge"