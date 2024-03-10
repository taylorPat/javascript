// Math built in object

const MIN = 50
const MAX = 120

x = Math.floor(Math.random() * (MAX - MIN)) + MIN;

if (x > 100) {
    console.log("The number is greater than 100")
}
else {
    console.log("Less than 100")
}
console.log(x)