
const cars = ['Мазда', 'Форд', 'BMV', 'Мерс']
const fib = [1, 1, 2, 3, 5, 8, 13]
const people = [
    {name: 'Dima', budjet: 4200},
    {name: 'Dima2', budjet: 4204},
    {name: 'Dima3', budjet: 4203}
]

// console.log(cars)
// cars.push('Рено')
// cars.unshift('Волга')
// console.log(cars)

// //удаление 1 элемента + возвращение его
// let a = cars.shift()
// //удаление последнего элемента + возращение его
// let b = cars.pop()
// console.log(cars)
// console.log(a)
// console.log(b)

//перевернуть массив + возращение его
// console.log(cars.reverse())

// const text = 'Привет, меня зовут Дима'
// const revText = text.split(',')
// console.log(revText)
// const revText2 = text.split('')
// console.log(revText2)
// const revText3 = text.split('').reverse()
// console.log(revText3)
// const revText4 = text.split('').reverse().join('');
// console.log(revText4)

// console.log(cars)
// const index = cars.indexOf('Мерс')
// cars[index] = 'Другая'
// console.log(cars)

// const index2 = people.findIndex(function(person) {
//     return person.budjet ===   4200
// } )
// console.log(people[index2])

// const man = people.find(function(person) {
//     return person.budjet ===   4200
// } )
// console.log("man", man)

//более длинный способ
// let findedPerson
// for (const person of people) {
//     console.log(person)
//     if (person.budjet === 4200) {
//         findedPerson = person
//     }
// }
// console.log("findedPerson", findedPerson)

//норм способ
// const person2 = people.find(person2 => person2.budjet === 4200)

// console.log(cars.includes('Мерс'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })
// console.log("upperCaseCars", upperCaseCars)

// const pow2Fib = fib.map(num => {
//     return num ** 2
// })
// console.log("pow2Fib", pow2Fib)

// const pow2 = num => num ** 2

// const pow2Fib2 = fib.map(pow2)
// console.log("pow2Fib2", pow2Fib2)

// const sqrt = num => Math.sqrt(num)
// const pow2Fib3 = fib.map(pow2).map(Math.sqrt)
// console.log("pow2Fib3", pow2Fib3)

// const filteredNum = pow2Fib2.filter(num => num > 20)
// console.log("filteredNum", filteredNum)

const allBudjet = people
.filter(person.budjet > 2000)
.reduce((acc, person) => {
    acc += person.budjet
    return acc    
}, 0)
console.log("allBudjet", allBudjet)










