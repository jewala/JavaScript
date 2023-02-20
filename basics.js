let firstName = 'Jesper'
console.log('This user is named ' + firstName + '.')

let lastName = 'Wagner'
console.log('His last name is ' + lastName + '.')


let age = 30
console.log(firstName + ' is ' + age + ' years old.')

let isMinor = (age > 18) ? true : false
console.log('User is a minor: ' + isMinor)

function myAge (a, b){
    return a * b
}
let result = myAge(5, 6)
console.log(result)
