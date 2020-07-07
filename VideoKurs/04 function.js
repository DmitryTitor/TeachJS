//функции
//Function Declaration
// function greet(name){
//     console.log('Привет: ' + name)
// }
// //Function Expression
// const greet2 = function greet2(name){
//     console.log('Привет2: ' + name)
// }


// greet('лена ')
// greet2('лена2 ')

// console.log(typeof greet)
// console.dir(greet)

//анонимные функции
// let counter = 0
// const interval = setInterval(function(){
//     if(counter === 5){
//         clearInterval(interval)
//     } else {
//     console.log(++counter)
//     }
// },  1000)

// стрелочные функции

// const arrow = (name) => {
//     console.log('Привет - ' + name)
// }
// const arrow = name => console.log('Привет - ' + name)
// arrow('Дима')

// const pow2 = num => num ** 2

// console.log(pow2(5))

// // параметры по умолчанию

// const sum = (a = 40,b = 2) => a + b
// console.log(sum(41,1)) 
// console.log(sum(41)) 
// console.log(sum()) 

// // rest собирает бесконечно чисел
// function sumAll(...all){
//     let result = 0
//     for (let num of all){
//         result += num
//     } 
//     return result
// }
// console.log(sumAll(1, 2, 3, 4))

// замыкание

function createMember(name) {
    return function(lastName){
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Дима')
console.log(logWithLastName('Попов'))
console.log(logWithLastName('Козлов'))






