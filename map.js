// let arr = [10,20,30];

// arr.map((number) = {
//     return number*number;

// })
// console.log(ansArray)


// let arr = [10,,20,3];
// arr.map((number,index)=> {
//     console.log(number);
//     console.log(index);
// })


// let arr = [10,,20,30,40,11,21,31];

// let evenArray = arr.filter((number) =>{
//     if(number%2===0){
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(evenArray)


// let arr = [9,1,7,4,2,8];
// arr.sort();
// console.log(arr);

// console.log(arr.indexOf(9));

// Now for single value
// let arr =[10,20,30]
// arr.forEach((value, index)=>{
//     console.log("Number: ", value," Index: ", index);

// })


// using arra forEach
// let arr = [10,20,30]
// let length = arr.length;
// console.log("length: ", length);
// // tradational loop
//     for(let index = 0; index < length; index++){
//         console.log(arr[index]);
//     }

//         arr.forEach((value, index) =>{
//             console.log("Number:", value, "index:", index);
// })



// Now using function
let arr = [10,20,30,40,50]

function getsum(arr){
    let sum = 0;
    arr.forEach((value)=>{
        sum = sum + value;
    })
    return sum;
}
let totalSum = getsum(arr);
console.log(totalSum);