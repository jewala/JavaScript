let firstName = 'Jesper'
console.log('This user is named ' + firstName + '.')

let lastName = 'Wagner'
console.log('His last name is ' + lastName + '.')


let age = 15
console.log(firstName + ' is ' + age + ' years old.')

let isMinor

if (age < 18){
    isMinor = true
}
else{
    isMinor = false
}
console.log('User is a minor: ' + isMinor)