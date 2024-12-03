// Room 1
// Filter an array of object to only include and console.log those from the year 2020
const cars = [
    { make: "Ford", model: "Mustang", year: 2020 },
    { make: "Chevy", model: "Camaro", year: 2019 },
    { make: "Tesla", model: "Model S", year: 2021 },
    { make: "BMW", model: "M3", year: 2020 }
];

cars.forEach((car) => {
    if (car.year == 2020) {
        console.log(car)
    }
})

// Room 2
// Filter an array of strings to only include those that start with the letter 'C":
const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

filtArray = fruits.filter((fruit) => {
    return fruit[0] == "C" 
})
console.log(filtArray)

// Room 3
// Create and console.log an array of the first letter of each string in an array
const words1 = ["Hello", "world", "this", "is", "web", "development"]

truncWords1 = words1.map((word) => {
    return word[0]
})

console.log(truncWords1)

// Room 4
// Create and console.log  an array of the last letter of each string in an array
const words2 = ["Hello", "world", "this", "is", "web", "development"]

truncWords2 = words1.map((word) => {
    return word[word.length-1]
})

console.log(truncWords2)

// Room 5
// find out the percentage of respondents who have black hair
let hairColor = ["Brown","Black","Dark Blonde","Brown"," Brown", "Brown", "Brown", "Blonde","Brown","Blonde","Blonde","Brown", "Brown", "Black" , "Black", "Blonde", "Brown", "Brown", "Amber ","Black"];

var sum = 0
hairColor.forEach((type) => {
    if (type == "Black") {
        sum += 1
    }
})

console.log(sum/hairColor.length)

// Room 6
// Remove and console.log duplicates from the array
const numbers = [1,2,2,3,3,4,4,5,5];

var seen = []

var uniques = numbers.filter((num) => {
    if (seen.includes(num)) {
        console.log(num)
        return true
    } else {
        seen.push(num)
        return false
    }
})

console.log(uniques)
