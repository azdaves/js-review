// Single Element access
console.log(document.getElementById('logo'))

const logoEL = document.getElementById('logo');

console.log(logoEL)

console.log(document.querySelector('#logo'));

console.log(document.querySelector('.chore'));

// Multiple Element access
let choresEL = document.getElementsByClassName('chore')

console.log(choresEL)

let choresOptionalEL = document.getElementsByTagName('li')

console.log(choresOptionalEL)

let headingEL = document.getElementsByTagName('h2')

console.log(headingEL)


let paragraphEL = document.querySelectorAll('.random-paragraph, .chore')

console.log(paragraphEL)
// console.log(document.querySelector('#logo'));