// - - Object Literals - -
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     blogs:['why mac & cheese rules', '10 things to make with marmite']
// }

// Getting Data
// console.log(user)
// console.log(user.name)
// console.log(user['name'])

// Setting Data
// user.age = 35
// console.log(user.age)
// user['name'] = 'chun-li'
// console.log(user['name'])

// console.log(typeof user)

// - - Methods and 'this' keyword in Objects - -
// let user = {
//     name: 'crystal',
//     age: 30,
//     email: 'crystal@thenetninja.co.uk',
//     blogs:[{ title: 'why mac & cheese rules', likes: 30 },
//     { title: '10 things to make with marmite', likes: 50 }],
//     login(){
//         console.log('The user is logged in.')
//     },
//     logout(){
//         console.log('The user logged out')
//     },
//     logBlogs(){
//         console.log('This user has written the following blogs:')
//         this.blogs.forEach( blog => console.log(blog.title, blog.likes ))
//     }
// }

// user.login()
// user.logout()
// user.logBlogs()

// Math Object
// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)

// const area = 7.7
// console.log(Math.round(area))
// console.log(Math.floor(area))
// console.log(Math.ceil(area))
// console.log(Math.trunc(area))

// Random Numbers
// const random = Math.random()

// console.log(random)
// console.log(Math.round(random * 100))

// Primitive Values
// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

// scoreOne = 100;
// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`)

// Reference values

const userOne = { name: 'ryu', age: 30 }
const userTwo = userOne

console.log(userOne,userTwo)

userOne.age = 40
console.log(userOne,userTwo)