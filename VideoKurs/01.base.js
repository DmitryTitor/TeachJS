
// var name = 'Dima'
// name = 'neDima'
// console.log("name", name)
// const surname = 'Popov'
// console.log("surname", surname)
// let middleName = 'Vladimirovich'
// middleName = 'neVladimirovich'
// console.log("middleName", middleName)

// //let age = prompt('age: ')

// const currentYear = 2020
// const birthday = 1999

// // let age = currentYear - birthday
// // console.log("age", age)

// let a = 10
// let b = 5

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(a++)
// console.log(--b)
// let c = 2
// console.log("c", c)
// c += a
// console.log("c", c)

// Типы данных, 5 примитивных
// const isProgrammer = true
// console.log(typeof isProgrammer)
// const age = 21
// console.log(typeof age)
// const name = 'Dima'
// console.log(typeof name)
// let x
// console.log(typeof x)
// console.log(null)

// приоритет операторов

// const fullAge = 21
// const birthYear = 1999
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge
// console.log("isFullAge", isFullAge)

// const courceStatus = 'fail'
// if (courceStatus === 'ready'){
//     console.log('Курс готов')
// } else if (courceStatus === 'pending'){
//     console.log('Курс не готов')
// } else {
//     console.log('Курс не получился')
// }

// const num1 = 42
// const num2 = '42'

// console.log('num1 == num2', num1 == num2)
// console.log('num1 === num2',num1 === num2)

// тернарное выражение
// const isReady = false
// isReady ? console.log('все готово!') : console.log('Все не готово')

// Функции

// function calculateAge(year){
//     return 2020 - year
// }

// const age = calculateAge(1999)
// console.log("age", age)
// const age2 = calculateAge(1988)
// console.log("age2", age2)

// function logInfo(name, year){
//     const age = calculateAge(year)
//     if (age > 0){
//         console.log('человек по имени ' + name + ' имеет возраст ' + age)
//     } else {
//         console.log('это уже будущее')
//     }
    
// }

// console.log(logInfo('Саня', 1999))
// console.log(logInfo('Саня', 2522))

// Массивы

// const cars = ['Мазда', 'Мерс', 'Форд']

// const cars = new Array('Мазда', 'Мерс', 'Форд')

// console.log("cars", cars)
// console.log("cars", cars[0])
// console.log("cars", cars[1])
// console.log("cars", cars[2])

// cars[0] = 'Порш'
// console.log("cars", cars[0])

// Циклы

// const cars = ['Мазда', 'Мерс', 'Форд']

// for (let i = 0; i < cars.length; i++){
//     const car = cars[i]
//     console.log(car)
// }

// for (let car  of cars){
//     console.log(car)       
// }

// Объекты

const person = {
    firstName: 'Dima',
    lastName: 'Popov',
    birth: 1999,
    lang: ['Ru', 'En'],
    hasWife: false,
    greet: function(){
        console.log('greet')
    }
}
console.log(person)
person.greet() 
console.log(person.firstName)
console.log(person['firstName'])
const key = 'firstName'
console.log(person[key])
person.hasWife = true
console.log(person)










