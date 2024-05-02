// - - Function Declaration - -
// function greet(){
//     console.log('Hello there')
// }

// - - Function Expression - -
// const speak = function(){
//     console.log('Good day!')
// }

// - - Calling the function
// greet()
// speak()

// // - - Function Hoisting - -
// function greet(){
//     console.log('Hello there')
// }

// - - Arguments and Parameters - -
// const speak = function(name = 'Luigi', time = 'night'){ // Variables in the brackets are parameters
//     console.log(`Good ${time}, ${name}!`)
// }

// speak('Mario', 'morning') // 'Mario' is an argument
// speak() // Function will use default arguments

// - - Returning Values - -
// const calcArea = function(radius){
//     return 3.14 * radius**2

// }

// const area = calcArea(5)
// console.log(area)

// - - Arrow Functions - - 

// Regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2
// }

// Arrow function
// You can ignore the brackets if there only one parameter.
// You must have brackets if there is none or multiple parameters
// const calcArea = radius => 3.14 * radius**2

// const area = calcArea(5)
// console.log('Area is: ', area)

// - - Practice with Arrow Functions - -
// const greet = function(){
//     return 'hello, world'
// }

// const greet = () => 'hello, world'
// const result = greet()
// console.log(result)

// const bill = function(products, tax){
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products [i] * tax;
//     }
//     return total
// }

// console.log(bill([10,15,30],0.2))

// const bill = (products, tax) => {
//     let total = 0
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products [i] * tax;
//     }
//     return total
// }

// console.log(bill([10,15,30],0.2))

// - - Differences between Functions and Methods - -
// const name = 'shaun'

// - - Functions - -
// Calls the function name to use
// const greet = () => 'hello'
// let resultOne = greet()
// console.log(resultOne)

// - - Methods - -
// Called from an object 
// let resultTwo = name.toUpperCase()
// console.log(resultTwo)

// - - Callbacks and foreach - -

// - - Callbacks - -
// const myFunc = (callbackFunc) =>{
//     let value = 50
//     callbackFunc(value)
// }

// myFunc(value => console.log(value))

// - - forEach - -
// let people = ['mario','luigi','ryu','shaun','chun-li']

// const logPerson = (person,index) => {
//     console.log(`${index} - Hello ${person}`)
// }

// people.forEach(logPerson)

// Get a reference to the people ul
const ul = document.querySelector('.people');
const people = ['mario','luigi','ryu','shaun','chun-li']

let html = ``

people.forEach(person => {
    // Create html template
    html += `<li style="color: purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html