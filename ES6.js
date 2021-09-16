// JS Array
// Map() method

let ranks = [1, 2, 3, 4]
console.log(ranks.map((e, index) => {
    return (e, index)
}))

let mul = [4, 9, 16, 25, 36]
const newArr = mul.map(Math.sqrt)
console.log(newArr)

// Map() vs forEach()

let ranks = [1, 2, 3]     
console.log(ranks.map((e, index) => {
    return (e, index)
}))

console.log(ranks.forEach((e, index) => {
    return (e)
}))

let newArr = ranks.map((e) => {
    if (e % 2 == 0)
        return e
})
console.log(newArr)

// filter() method

let num = [1, 2, 3, 4, 5, 6]

let newfilterarr = num.filter((e, index) => {
    if (e % 2 == 0)
        return e
})
console.log(newfilterarr)


let ages = [12, 36, 21, 48, 10, 65]

let newfilterarr = ages.filter((age) => {
    if (age >= 18)
        return age
})
console.log(newfilterarr)

// Promises 

let concert = true

let attendConcert = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (concert) {
            resolve("Bob attended the concert");
        }
        else {
            reject("Bob failed to attend the concert");
        }
    }, 2000);
});
console.log(attendConcert)


attendConcert.then((data) => console.log(data)); // then() method

attendConcert.catch((error) => console.log(error)); // catch() method