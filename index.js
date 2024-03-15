function addForEach(element, index, array) {
    array[index] = element + 5;
}

function addMap(element) {
    return element + 5;
}

function filterIsEven(element) {
    return element % 2 === 0;
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