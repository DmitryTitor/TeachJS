
// const timeout = setTimeout( () => {
//     console.log('After timeout');
// }, 2500)

// clearTimeout(timeout)

// const interval = setInterval(() => {
//     console.log('After timeout');
// }, 1000)

// clearTimeout(timeout)

// const delay = (callback, wait = 1000) => {
//     setTimeout(callback, wait)
// }

// delay( () => {
//     console.log('After 2 sec');
// }, 2000)

const delay = (wait = 1000) => {
    const promice = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve()
            // reject ='что то пошло не так'
        }, wait)
    })
    return promice
}

delay(2500)
    .then( () => {
        console.log('After 2 sec');
    })
    .catch( err => console.error('error:',err))
    .finally( () => console.log('finally'))


const getData = () => new Promise(resolve => resolve([
    1, 1, 2, 3, 5
]))

// getData().then(data => console.log(data))


async function asyncExample() {
    try {
        await delay(3000)
        const data = await getData()
        console.log(data)
    } catch(err) {
        console.log(err);
    } finally {
        console.log('finally');
    }
}
asyncExample()









