// let obj = {
//     age : 20,
//     wt : 70,
//     ht : 5.5,
// };
//  console.log(obj)
//  obj.color = "white";
//  console.log(obj);

// let src = {
//    age : 20,
//    wt : 70,
//    ht : 5.5,
// };
// let dest = {...src};

// // single part change
// src.age = 30;
// console.log("src", src);
// console.log("dest", dest);


// let src = {
//     age : 20,
//     wt : 70,
//     ht : 5.5,
// };
// let dest = Object.assign({}, src);

// src.age = 30;

// console.log("src:", src);
// console.log("dest:", dest);


// let src = {
//     age : 20,
//     wt : 70,
//     ht : 5.5,
// };
// let src2 = {
//     value : 100,
//     name : "sushil"
// };
// let dest = Object.assign({}, src, src2);
// src.age = 30;

// console.log("src:", src);
// console.log("dest:", dest);


// let src = {
//     age : 20,
//     wt : 70,    
//     ht : 5.5,
// };
//  let dest = {};
//  //cloning using iteration
//  for(let key in src){
//     let newKey = key;
//     let newValue = src[key];
//     //insert newKey and value in dest and create a clone
//     dest[newKey] = newValue;
//  }

//  src.age = 30;

//  console.log("src:", src);
//  console.log("dest:", dest);


