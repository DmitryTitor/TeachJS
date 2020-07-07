'use strict';

class calculator{
    
    _state;

    get state(){
        return this._state;
    }

    constructor(numberValue){
        this._state = numberValue;
        return this;
    }

    addition(secondOperand){
        this._state = this.state + secondOperand;
        return this;
    }

    subtraction(secondOperand){
        this._state = this.state - secondOperand;
        return this;
    }

    multiplication(secondOperand){
        this._state = this.state * secondOperand;
        return this;
    }

    division(secondOperand){
        this._state = this.state / secondOperand;
        return this;
    }

}

let calculatorObject = new calculator(5).multiplication(2).subtraction(4).state;
console.log(calculatorObject);



