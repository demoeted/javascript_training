// - -  Loops - -

// For Loops

// for(let i = 0; i < 5; i++){
//     console.log('In loop: ', i)
// }
// console.log('Loop finished')

// const names = ['shaun','mario','luigi']

// for(let i = 0; i < names.length; i++){
//     // console.log(names[i], i)
//     let html = `<div>${names[i]}</div>`
//     console.log(html)
// }

// While Loops

// const names = ['shaun','mario','luigi']

// let i = 0
// while(i < 5){
//     console.log('in loop;', i)
//     i++
// }

// let i = 0
// while (i < names.length){
//     console.log(names[i])
//     i++
// }

// Do while loops

// let i = 5
// do {
//     console.log('Value of i is: ', i)
//     i++
// } while(i < 5)

// - - Conditional Statements - - 

// If Statements

// const age = 25

// if(age > 20){
//     console.log('You are over 20 years old.')
// }

// const ninjas = ['shaun','ryu','chun-li','yoshi']

// if(ninjas.length > 3){
//     console.log("That's a lot of ninjas")
// }

// const password = 'passwordpass'

// if(password.length >= 12){
//     console.log('That password is mighty strong')
// } else if(password.length >= 8){
//     console.log('That password is long enough!')
// } else {
//     console.log('Password is not long enough')
// }

// Logical Operators || OR and && AND

// const password = 'p@ss1'

// if(password.length >= 12 && password.includes('@')){
//     console.log('That password is mighty strong')
// } else if(password.length >= 8 || password.includes('@') && password.length >= 5){
//     console.log('That password is strong enough!')
// } else {
//     console.log('Password is not strong enough')
// }

// Logical NOT (!)

// let user = false

// if(!user){
//     console.log('You must be logged in to continue')
// }

// console.log(!true)
// console.log(!false)

// Break and Continue

// const scores = [50, 25, 0, 30, 100, 20, 10]

// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//         continue
//     }

//     console.log('Your score: ', scores[i])

//     if(scores[i] === 100){
//         console.log('Congratulations, you got the top score!')
//         break
//     }
// }

// Switch Statements

// const grade = 'D'

// // Using switch statement
// // Switch statements use scrict comparison
// switch(grade){
//     case 'A':
//         console.log('You got an A!')
//         break; // Required if you want to run exclusively this code and not the rest of the statements below.
//     case 'B':
//         console.log('You got an B')
//         break;
//     case 'C':
//         console.log('You got an C')
//         break;
//     case 'D':
//         console.log('You got an D')
//         break;
//     case 'E':
//         console.log('You got an E')
//         break;
//     default:
//         console.log('Not a valid grade')
// }

// Using if statements
// if (grade === 'A'){

// } else if (grade === 'B') {

// } else if (grade === 'C') {
    
// } else if (grade === 'D') {
    
// } else if (grade === 'E') {
    
// } else {

// }

// - - Variables and Block Scope - -

const age = 30 // Global scope variable - Accesible anywhere

if(true){
    const age = 40 // Local scope variable - Only Accessible in this code block
    const name = 'shaun'
    console.log('Inside first code block: ', age, name)

    if (true){
        const age = 50 
        console.log('inside second code block: ', age) 
        var test = 'hello' // Will work outside of this code block
    }
}

console.log('Outside code block: ', age, name, test)