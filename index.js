// Descrtructuring = extract values from array and objects

// 1. Swap two values
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a, b)

// 2. Swap two values of an array
const colors = ["red", "blue", "green", "white"];

[colors[0], colors[3]] = [colors[3], colors[0]];

console.log(colors)

// 3. Assign Array values to variables
const [firstColor, ...secondColors] = colors; // use rest operator ...

console.log(firstColor, secondColors)

// 4. Assign object values to variables
const person1 = {
    firstName: "Spongebob",
    lastName: "Squrepants",
    age: 20,
    numberOfHairs: 3
}
const {firstName, lastName, job="unemployed", ...numbers} = person1;
console.log(firstName, lastName, job, numbers.age, numbers.numberOfHairs)

// 5. Destructuring in function parameters
function displayPerson({firstName, lastName, job="Unemployed"}) {
    console.log(`Wit function params destructuring: ${firstName}, ${lastName}, ${job}`)
}

displayPerson(person1)