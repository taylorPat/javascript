// Date(year, month, day, hour, minute, second, ms)
// Date("2024-01-02T12:00:01Z")
const date = new Date("2023-12-31T23:59:59Z");
const date2 = new Date("2024-01-01T00:00:00Z")

if (date2 > date) {
    console.log("Happy New Year!!!")
}

console.log(date)

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year, month, day, hour, min, sec, dayOfWeek)
