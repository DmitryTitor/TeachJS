// const name = 'Dima'
// console.log("name", name)
// console.log(typeof name)

// const age = 21
// const output = 'Привет, меня зовут: ' + name + ' и мой возраст ' + age + ' год'
// console.log("output", output)

// function getAge(){
//     return age
// }

// const output = `Привет, меня зовут ${name} и мой возраст ${age < 20 ? 'Мало' : age} год`

// console.log("output", output)

// const output = `
//     <div>this is div</div>
//     <p>this is p</p>`

// const name = 'Dimas' 
// console.log(name.length)
// console.log(name.toLowerCase())
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('as'))
// console.log(name.startsWith('Dim'))
// console.log(name.endsWith('as'))
// console.log(name.repeat(3))
// console.log('      pass     ');
// console.log('      pass     '.trim());
// console.log('      pass     '.trimLeft());
// console.log('      pass     '.trimRight());

const personName = 'Дима'
const personAge = 21
const personName2 = 'неДима'
const personAge2 = -21

function logPerson(s, name, age){
    if(age < 0){
        age = 'Еще не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}



const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)




















