// const num = 42 // integer
// const float = 42.42 // float

// const pow = 10e3 // \
// console.log("pow", pow)
// const num2 = Number.MAX_SAFE_INTEGER
// console.log("num2", num2)
// const aaa = Math.pow(2,53)-1
// console.log("aaa", aaa)


// const a1 = Number.MAX_VALUE
// console.log("a1", a1)

// const a2 = Number.POSITIVE_INFINITY
// console.log("a2", a2)

// const a3 = Number.NEGATIVE_INFINITY
// console.log("a3", a3)

// console.log(Number.NaN) //Not a Number
// console.log(typeof NaN)
// console.log(2 / undefined)

// const weird = 2 / undefined
// const weird2 = Number.POSITIVE_INFINITY
// console.log(Number.isNaN(weird))
// console.log(Number.isFinite(weird2))

// Преобразования из строки в число
// const n1 = '42'
// const n2 = '40.22' 
// console.log(n1 + n2)
// console.log(Number.parseInt(n1) + Number.parseFloat(n2))
// console.log(Number(n1) + Number(n2))
// console.log(+n1 + +n2)


// //особенности хранения инфы о цифрах в js
// console.log(0.2 + 0.4)
// //отсечение последних знаков
// console.log(parseFloat((0.2 + 0.4).toFixed(1)))

//BigInt
// console.log(typeof (90071992547409919999n + 3218978473298892n))

// console.log(Number.parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)

// Math

// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.abs(-22))
// console.log(Math.sqrt(81))
// console.log(Math.pow(2,3))
// console.log(Math.max(42,43,52,64,11))
// console.log(Math.min(42,43,52,64,11))

// console.log(Math.floor(4.9))
// console.log(Math.ceil(4.9))
// console.log(Math.round(4.9))
// console.log(Math.trunc(4.9))
// console.log(Math.random())

function hetRancomBetween(min,max){
    return Math.random() * (max-min) + min
}
console.log("hetRancomBetween -> hetRancomBetween", Math.round(hetRancomBetween(5,20)))





