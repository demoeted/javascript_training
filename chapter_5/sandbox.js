// - - Object Literals - -
let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    blogs:['why mac & cheese rules', '10 things to make with marmite']
}

// Getting Data
console.log(user)
console.log(user.name)
console.log(user['name'])

// Setting Data
user.age = 35
console.log(user.age)
user['name'] = 'chun-li'
console.log(user['name'])
