
let calcModule = require("./Calculator")

const Calculator = calcModule.Calculator;

let calculatorObject = new Calculator(5).multiplication(2).subtraction(4).state;
