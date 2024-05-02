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

// - - Template Strings - -
// const title = 'Best reads of 2019'
// const author = 'Mario'
// const likes = 30

// // Concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.'
// console.log(result)

// // Template String way - uses backticks (`)
// let result = `The blog called ${title} by ${author} has ${likes} likes`
// console.log(result)

// // Creating HTML Templates
// let html = `
//     <h2>${title}</h2>
//     <p>By ${author}</p>
//     <span>This blog has ${likes} likes</span>
// `
// console.log(html)

// - - Arrays - -
// let ninjas = ['shaun', 'ryu', 'chun-li']
// console.log(ninjas)
// console.log(ninjas[1]) // Get element from index 1

// ninjas[1] = 'ken' // Override element at index 1 to 'ken'
// console.log(ninjas[1])

// let ages = [20,25,30,35]
// console.log(ages[2])

// let random = ['shaun','crystal',30,20]
// console.log(random)

// console.log(ninjas.length)

// // Array Methods
// let result = ninjas.join(',') // Adds array elements together into a string with the ',' showing each separate element.

// let result = ninjas.indexOf('chun-li')
// let result = ninjas.concat(['ken','crystal']) // Joins two arrays together
// let result = ninjas.push('ken') // Returns the new Array length
// result = ninjas.pop() // Removes the last index of the array and returns the value.
// console.log(result)

// - - Null and Undefined - -
// let age

// console.log(age, age + 3, `The age is ${age}`) // Result: undefined, NaN, "The age is undefined"

// age = null
// console.log(age, age + 3, `The age is ${age}`) // Result: null, 3, "The age is null"

// - - Booleans and Comparisons - -
console.log(true, false, "true", "false")

// Methods returning booleans
let email = 'luigi@thenetninja.co.uk'
let names = ['mario', 'luigi', 'toad']

// let result = email.includes('@')
// console.log(result)

// result = names.includes('luigi')
// console.log(result)

// Comparison Operators
let age = 25

// console.log(age == 25)
// console.log(age == 30)
// console.log(age != 30)
// console.log(age > 20)
// console.log(age < 20)
// console.log(age <= 25)
// console.log(age >= 25)

// let name = 'shaun'

// console.log(name == 'shaun')
// console.log(name == 'Shaun')
// console.log(name > 'crystal') // s is later than c in the alphabet hence true
// console.log(name > 'Shaun') // lowercase letters are greater than Uppercase letters
// console.log(name > 'Crystal')

// // Loose Comparison (Different types can still be equal)
// // Javascript does a type conversion in the background
// console.log(age = 25)
// console.log(age = '25')
// console.log(age != 25)
// console.log(age != '25')

// Strict Comparison (Type and Value must match to be equal)
console.log(age === 25)
console.log(age === '25')
console.log(age !== 25)
console.log(age !== '25')
