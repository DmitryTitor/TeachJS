
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
 

