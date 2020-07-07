'use strict';

class Calculator{
    
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

module.exports = {Calculator};