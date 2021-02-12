const delay = ms => {
  return new Promise(r => setTimeout(() => r(), ms));
}

const url ='https://jsonplaceholder.typicode.com/todos';

// function fetchToDos() {
//   console.log('fetch todo started');
  
//   return delay(2000)
//   .then(() => fetch(url))
//   .then(response => response.json())
// }

// fetchToDos()
// .then(data => {
//   console.log('Data: ', data);
// })
// .catch(e => console.error(e));

async function fetchAsyncTodos() {
  console.log('fetch todo started');
  
  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();    

    console.log('Data: ', data);
  } catch (e) {
    console.error(e);
  } finally {
    
  } 
}

fetchAsyncTodos();
