// closure -> allow for private variables and state maintenance

function createCounter() {
    let counter = 0

    function increase() {
        counter++
    }
    
    function getCounter() {
        return counter;
    }
    
    return {increase, getCounter}
}

const counts = createCounter();

counts.increase()
counts.increase()
counts.increase()

console.log(counts.getCounter())