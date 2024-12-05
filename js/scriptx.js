// Room 1
// Capitalize the first letter of each word in an array of strings
//Expected output: ["Hello", "World", "This", "Is", "A", "Sentence"]
const words1 = ['hello', 'world', 'this', 'is', 'a', 'sentence'];

wordsNew = words1.map((word) => {
    return word.substring(0, 1).toUpperCase() + word.substring(1)
})

console.log(wordsNew)

// Room 2
//Create an array of square roots from an array of numbers:
// Expected Output: [1, 2, 3, 4, 5]
const numbers = [1, 4, 9, 16, 25];

var numSqrs = numbers.map((num) => {
    return Math.sqrt(num)
})

console.log(numSqrs)

// Room 3
// Create an array of URLs from an array of route names:
//Expected output: ["https://example.com/home", "https://example.com/about", "https://example.com/contact", "https://example.com/sales"]
const routes = ['home', 'about', 'contact', 'sales',];

var webArr = routes.map((word) => {
    return "hhtps:\/\/example.com\/" + word
})

console.log(webArr)

// Room 4
//Filter an array of strings to only include those that are longer than a  length of 5 characters 
// Expected output: ["elephant", "giraffe"]
const words2 = ["cat", "dog", "elephant", "giraffe", "lion"];

var longWords = words2.filter((word) => {
    return word.length > 5
})

console.log(longWords)

// Room 5
// Filter an array of objects to only include those that have the property of ‘true’ 
// Expected output [{ name: "Apples", price: 0.99, inStock: true }, { name: "Oranges", price: 0.89, inStock: true }, { name: "Pears", price: 0.69, inStock: true }]
const products = [
    { name: "Apples", price: 0.99, inStock: true },
    { name: "Bananas", price: 0.79, inStock: false },
    { name: "Oranges", price: 0.89, inStock: true },
    { name: "Pears", price: 0.69, inStock: true }
];

var stocked = products.filter((product) => {
    return product.inStock
})

console.log(stocked)

// Room 6
// Sum up values in an array of objects:
// // Output: 100
const items = [
    { name: 'item1', value: 10 },
    { name: 'item2', value: 20 },
    { name: 'item3', value: 30 },
    { name: 'item4', value: 40 }
];

sum = 0
items.forEach((obj) => {
    sum += obj.value
})

console.log(sum)

// Room 7
//Creating an array of the ASCII code of each character in an array of strings
//Expected output:  [[72, 101, 108, 108, 111], [119, 111, 114, 108, 100]]
const words = ['Hello', 'world'];

var asc = []
words.forEach((word) => {
    ascList = []
    for (let c=0; c < word.length; c++) {
        ascList.push(word.charCodeAt(c))
    }
    asc.push(ascList)
})

console.log(asc)

// Room 8
// Filter an array of numbers to only include those that are prime numbers
// Expected output: // [2, 3, 5, 7]
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var prime = numbers3.filter((num) => {
    if (num == 1 || num == 0) {
        return false
    }
    for (let i=2; i<(num); i++) {
        if (num % i == 0) {
            return false
        }
    }
    return true
})

console.log(prime)

// Room 9
//Find the longest word in an array of strings:
const words3 = ['Hello', 'world', 'this', 'is', 'a', 'sentence'];
// Expected Output: 'sentence'

var largestInd = 0
wordLongest = words3.forEach((word) => {
    if (word.length > words3[largestInd].length) {
        largestInd = words3.indexOf(word)
    }
})
console.log(words3[largestInd])
