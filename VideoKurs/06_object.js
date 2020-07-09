const person = {
    name: 'Dima',
    age: undefined,
    isProgrammer: true,
    languages: ['ru', 'en'],
    // 'complex key': 'Complex value',
    // ['key_' + (1 + 3)]: 'Computed key',
    greet() {
        console.log('greet function')
    },
    info() {
        console.log('Информация про человека по имени' + this.name);
        
    }
}

// console.log(person.name);
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])
// person.greet()

// person.age++
// person.languages.push('by')
// person['key_4'] = undefined

// console.log(person);

// delete person['key_4']
// console.log(person);


//Деструктуризация
//хотим получить вот эти поля, но это очень долго
// const name = person.name
// const age = person.age
// const lang = person.languages
//делаем так
// const {name, age: personAge = 10, languages} = person

// console.log(name, personAge, languages);

// for (let key in person) {
//     //цикл for in может быть опасен, потому что проверка может пойти не только по
//     // методам объекта, но и по методам прототипа (к примеру метод toString()), 
//     // поэтому делаем проверку
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key) 
//         console.log('value:', person[key])
//     }
// }
//еще один способ, метод keys не залазит в прототип, так что 
// проверка не нужна
// Object.keys(person).forEach(key => {
//     console.log('key:', key) 
//     console.log('value:', person[key])
// })

person.info()

const logger = {
    keys() {
        console.log('Object keys:', Object.keys(this))
    },
    // keysAndValues() {
    //     Object.keys(this).forEach(key => console.log(`'${key}:' ${this[key]}`))
    // }
    //если делать не стрелочной функцией а обычной, то контекст this теряется, т.е.
    // function создает свой собственный контекст. Решается это следующим образщом:
    // 1) сохранить контекст this в переменную
    keysAndValues() {
        const self = this
        Object.keys(this).forEach(function(key) {
            console.log(`'${key}:' ${self[key]}`)
        })
    }
    // 2) либо использовать bind, который фиксирует контекст this
    // keysAndValues() {
    //     Object.keys(this).forEach(function(key) {
    //         console.log(`'${key}:' ${this[key]}`)
    //     }.bind(this))
    // }
    ,
    withParams(top = false, between = false, bottom = false) {
        if (top) {
            console.log('-----Start-----');
        }
        
            const self = this
        Object.keys(this).forEach(function(key, index, array) {
            console.log(`'${key}:' ${self[key]}`)
            if (between && index !== array.length - 1) {
                console.log('---------------')
            }
        })

        if (bottom) {
            console.log('-----End-----');
        }
    }
}
// const bound = logger.keys.bind(logger)
// bound()
// logger.keysAndValues.call(person)

logger.withParams.call(person, true, true , true)
//примет только два аргумента, оборачиваем в массив
logger.withParams.apply(person, [true, true , true])




















