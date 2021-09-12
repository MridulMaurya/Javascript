// // ES6 Array Destructing

console.log('Merged class 1 ES6')

const arr = [1,2,3,4]
console.log(arr[2])

const [one,two,three] = [1,2,3,4] //ES6 Destructuing
console.log(three)
console.log(four) //undefined

function getscores() {
    return [90,100]
}

let [x,y,z] =getscores()
console.log(x)
console.log(y)
console.log(z)

// Array Destructuring Assignment and Rest syntax(...)

function getscores() {
    return [10,20,30,40,50]
}
let [a,b,c,...args] = getscores();
console.log(a)
console.log(b)
console.log(c)
console.log(args)

//ES6 Object Destructuing

const obj = {
    Name:'Mahi',
    email:'mahi18@gmail.com',
    age:22
}
console.log(obj.email)

let {Name,email,age,dum} = obj //ES6 Destructing
console.log(email)
console.log(dum)

// Example of ES6 Destructing

let person ={
    firstname:'Mridul',
    lastname:'Maurya',
    age1:21,
}

let {lastname,age1,firstname,middlename} = person  //order of variable dosen't matter
console.log(firstname)
console.log(lastname)
console.log(age1)
console.log(middlename)

// //ES6 Arrow Function

// let add = function(x,y,z) {
//     return x+y+z;
// }
// console.log(add(10,10,20))

let add = (x,y) =>{
    return x+y
}
console.log(add(10,20))

// this keyword

const counter = {
    count: 1,
    next: function() {
        return ++(this.count)*100
    }
}
console.log(counter.next())
console.log(counter.next())
console.log(counter.next())
console.log(counter.count)
console.log(counter)


let a,b;
[a,b] = [10,20]
console.log(a)
console.log(b)

function getitems () {
    return [1,2]
}

let items = getitems()
let thirdItem = items[1] != undefined ? items[1] : 0 ;
console.log(thirdItem)

let a,b 
[a=2, b=3] = []
console.log(a)
console.log(b)