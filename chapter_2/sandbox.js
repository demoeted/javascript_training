// - - Intro - -
// alert('hello, world')

// console.log(1)
// console.log(2)

// - - Variables - - 
// let age = 25 
// let year = 2019

// console.log(age, year)

// age = 30
// console.log(age)

// const points = 100 
// // points = 50 This will create an error since points is a constant and its value cannot change.
// console.log(points)

// var score = 75
// console.log(score)


// - - Strings - - 
// console.log('hello, world')

// let email = 'mario@thenetninja.co.uk'
// console.log(email)

// // string concatenation
// let firstName ='Brandon'
// let lastName = 'Sanderson'

// let fullName = firstName + ' ' + lastName
// console.log(fullName)

// // Retrieving characters from string
// console.log(fullName[0])
// console.log(fullName[2])

// // String length property
// console.log(fullName.length)

// // String methods
// console.log(fullName.toUpperCase())
// let result = fullName.toLowerCase()
// console.log(result, fullName)

// let index = email.indexOf('@')
// console.log(index)

// Common String methods
// let email = 'mario@thenetninja.co.uk'

// let result = email.lastIndexOf('n')

// let result = email.slice(0,10) // (start index, end index)

// let result = email.substr(4,10) // (start index, character length)

// let result = email.replace('m','w') // (find character, replacement)

// let result = email.replace('n','w') // Replaces first instance of the find character

// console.log(result)

// - - Numbers - -
// let radius = 10
// const pi = 3.14

// console.log(radius, pi)

// Math Operators +, -, *, /, **, %
// console.log(10 / 2);

// let result = radius % 3

// console.log(result)

// let result = pi * radius**2

//Order of operation - B E D M A S (Brackets, Exponents, Division, Multiplicaiton, Addition, Subtraction)
// let result = 5 * (10 - 3)**2
// console.log(result)

// let likes = 10
// likes = likes + 1
// likes++ // Shorthand form to add one
// likes-- // Shorthand to subtract one
// likes += 10 // Shorthand to add a specific amount
// likes -= 5 // Shorthand to subtract a specific amount
// likes *= 2 // Shorthand to multiply a specific amount
// likes /= 2 // Shorthand to divide a specific amount
// console.log(likes)

//NaN - Not a Number

// console.log(5 / 'hello')
// console.log(5 * 'hello')

// let result = 'the blog has ' + likes + ' likes'
// console.log(result)

// Template Strings
const title = 'Best reads of 2019'
const author = 'Mario'
const likes = 30

// Concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.'
// console.log(result)

// Template String way - uses backticks (`)
let result = `The blog called ${title} by ${author} has ${likes} likes`
console.log(result)

// Creating HTML Templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes} likes</span>
`
console.log(html)