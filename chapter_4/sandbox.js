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
const calcArea = function(radius){
    let area = 3.14 * radius**2

    return area
}

const area = calcArea(5)
console.log(area)