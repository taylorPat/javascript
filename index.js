// sort() = sorting elements of arrays in place in lexicographic order
const fruits = [
    {name: "apple", calories: 10},
    {name: "banana", calories: 33},
    {name: "birne", calories: 3},
]

// sorting objects number
// fruits.sort((a, b) => b.calories - a.calories)
// console.log(fruits)

// sorting objects by alphabet
fruits.sort((a,b) => a.name.localeCompare(b.name))
console.log(fruits)
