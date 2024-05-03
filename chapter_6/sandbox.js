//  - - Grabbing one element - -
// const para = document.querySelector('div.error')

// console.log(para)

// - - Selecting multiple elements - -
// const paras = document.querySelectorAll('p')
// const errors = document.querySelectorAll('.error')

// paras.forEach(para => console.log(para))
// errors.forEach(error => console.log(error))

// - - Get an Element by ID - -
// const title = document.getElementById('page-title')
// console.log(title)

// - - Get Elements by Class Name - -
// const errors = document.getElementsByClassName('error')
// console.log(errors)

// - - Get Elements by Tag Name - -
// const paras = document.getElementsByTagName('p')
// console.log(paras)

// - - Changing Element Text - -
// const para = document.querySelector('p')

// console.log(para.innerText)
// para.innerText = 'Ninjas are awesome!'

// - - Appending to Element Text - -
// para.innerText += 'Ninjas are awesome!'

// - - Changing/Appending to multiple Element Text
// const paras = document.querySelectorAll('p')
// paras.forEach(para => {
//     console.log(para.innerText)
//     para.innerText += ' New text!'
// })

// - - Updating an Element's HTML - -
// const content = document.querySelector('.content')

// console.log(content.innerHTML)
// content.innerHTML = '<h2>This is a new h2</h2>'
// content.innerHTML += '<h2>This is a new h2</h2>'

// const people = ['mario','luigi','yoshi']

// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`
// })

// - - Updating an Element's attribute - -
// const link= document.querySelector('a')
// console.log(link.getAttribute('href'))
// link.setAttribute('href','https://www.thenetninja.co.uk')
// link.innerText= 'The Net Ninja Website'

// const msg = document.querySelector('p')
// console.log(msg.getAttribute('class'))
// msg.setAttribute('class','success')
// msg.setAttribute('style', 'color: green;')

// - - Configuring multiple styles to an element
// const title = document.querySelector('h1')
// title.setAttribute('style', 'margin: 50px;')

// console.log(title.style)
// console.log(title.style.color)

// title.style.margin = '50px'
// title.style.color = 'crimson'
// title.style.fontSize = '60px'
// title.style.margin = ''

// - - Add and Remove Classes - -
// const content = document.querySelector('p')

// console.log(content.classList)
// content.classList.add('error')
// content.classList.remove('error')
// content.classList.add('success')

// - - Add and Remove Classes Challenge - -
const paras = document.querySelectorAll('p')

paras.forEach(para =>{
    if(para.innerText.includes('success')){
        para.classList.add('success')
    }

    if(para.innerText.includes('error')){
        para.classList.add('error')
    }
})

// - - Toggle CSS Classes - -
const title = document.querySelector('.title')

title.classList.toggle('test')
title.classList.toggle('test')