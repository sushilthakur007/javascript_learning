// //In async we have to create a async function
// //Async return a promise

// async function getData(){

//     setTimeout(function(){
//         console.log("I an inside set Timeout block")
//     }, 3000);
// }

// //To execute function up(uper wala) code 

// getData();

// //await - ?

// //fetch API





// async function getData(){
//     let response = fetch('https://jsonplacholde.typicode.com/todos/1');
//     console.log( response );
// }   
// getData();

//scenario:
//prepare url / api endpoint -> sync
//fetcc data - > network call -> async
//process data -> sync





// const myHolder = new Headers();
// myHeaders.appended("content-Type", "application/json");

// const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//     method: "POST",
//     body: JSON.stringify({ username: "Sushil Thakur" }),
//     headers: myHeaders,
// };
// async function getData(){
// const response = await fetch(url,options);
// let data = await response.json();
// console.log("My data: ", data);
// }

// getData();






const myHolder = new Headers();
myHeaders.appended("content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({ username: "Sushil Thakur" }),
    headers: myHeaders,
};
async function getData(){
    const url = "https://jsonplaceholder.typicode.com/posts/add";
const response = await fetch(url);
let data = await response.json();
console.log("My data respons: ", data);
}
async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    
}
async function processData(){
    await postData();
    getData();
}
processData();

