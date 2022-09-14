// const welcomeEl = document.getElementById("welcome-el");

// function greetUser(greeting, name, emoji) {
//     welcomeEl.textContent = `${greeting}, ${name} ${emoji}`;
// }

// greetUser('Como vai', "Vini", "🤗");


function addOldway(a, b) {
    return a + b;
}
// same with arrow function
const add = (a, b) => a + b; // a and b are parameters
console.log(add(3, 4)) // 3 and 4 are arguments
console.log(add(9, 102))

// parameters need to be INSIDE of a funcntion, when you create it
// arguments will be OUTSIDE of a function, when you call it


let books = ['The Pyramide', 'The Lord of The Rings', 'Digital Transformation']

function getFirstOldWay(arr) {
    return arr[0]
}
// same with arrow function
const getFirst = (arr) => arr[0];
console.log(getFirst(books));