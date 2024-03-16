function addForEach(element, index, array) {
    array[index] = element + 5;
}

function addMap(element) {
    return element + 5;
}

function filterIsEven(element) {
    return element % 2 === 0;
}

function reduceMax(previous, next) {
    return Math.max(previous, next)
}

// forEach
let numbersForEach = [1,2,3]
let numForEach = numbersForEach.map(addMap)
console.log(numForEach)

// map
let numbersNap = [1,2,3]
let numMap = numbersNap.map(addMap)
console.log(numMap)

// filter
let numbersFilter = [1,2,3,4,5]
let numFilter = numbersFilter.filter(filterIsEven)
console.log(numFilter)

// reduce
let numbersReduce = [1,2,3,4,10,6,7]
console.log(Math.max(...numbersReduce))
let maxNumber = numbersReduce.reduce(reduceMax)
console.log(maxNumber)

// function expression
setTimeout(function() {
    console.log("Hello, World!")
}, 3000)
let numsReduced = numbersReduce.reduce(function (previous, next) {
    return Math.max(previous, next)
})
console.log(`Reduced numbers with function expressions: ${numsReduced}`)

// arrow functions
let numsReducedArrow = numbersReduce.reduce((previous, next) => {
    return Math.max(previous, next)
})
console.log(`Reduced numbers with arrow functions: ${numsReducedArrow}`)