
function getObject() {
    
    let counter = 0

    return {
        getCounterValue() {
            return counter
        },

        incCounter() {
            counter++
        }
    }
}

const {getCounterValue, incCounter} =  getObject()
console.log('Counter =', getCounterValue())
incCounter()
incCounter()
incCounter()
incCounter()
incCounter()
console.log('Counter =', getCounterValue())
 

