const fruits = [
    {name: "apple", calories: 10},
    {name: "banana", calories: 33},
    {name: "birne", calories: 3},
]

fruits.forEach(fruit => console.log(fruit.name))

const fruitNames = fruits.map(fruit => fruit.name)
fruitNames.forEach(name => console.log(name))

const newFruits = fruits.filter(fruit => fruit.calories < 20)
newFruits.forEach(fruit => console.log(fruit.name))

console.log("-----------")
fruits.forEach(fruit => console.log(fruit.name))

const lowestCalFruit = fruits.reduce( (maxi, fruit) => {
    return fruit.calories < maxi.calories ? fruit : maxi;
}
)

console.log(lowestCalFruit)