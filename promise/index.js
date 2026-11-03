//how to do with promise and related codes 

// let firstPromise = new Promise( (resolve, reject) => {
//     setTimeout(function sayMyName(){
//         console.log("My Name is Sushil");
//         resolve(1001);
// });




// function sayMyname(){
//     console.log("My name is sushil");
// }

// setTimeout(sayMyname, 10000)


// }, 15000);





//  //if we have to using then and catch with the promise we have to give them one function for each

// let promise1 = new Promise((resolve, reject)=> {
//     let success = false;
//     if(success){

//         }
//         else {
//             reject("Promise Rejected");
//     }
// });

// promise1.then((message) => {
//     console.log("Then ka massage is " + message);

// }).catch((error)=> {
//     console.log("Error: " + error);
// })



// //if we have to using then and catch with the promise we have to give them one function for each
// let promise1 = new Promise((resolve, reject)=> {
//     let success = true;
//     if(success) {
//         resolve(10);
//         }
//         else {
//             reject("Promise Rejected");
//     }
// });

// promise1.then((message)=> {
//     console.log("first massage:" + message);
//     return 20;
// }).then((message)=> {
//     console.log("second msg:" + message);
//     return 30;
// }).then((message)=> {
//     console.log("third msg: " + message);
// }).catch((error) => {
//     console.error(error);
// }).finally((message) => {
//     console.log("final")
// })


