// class Human {
//     // properties
//     age = 20;
//     wt = 70;
//     #ht = 5.5; // private

//     // behaviour
//     walking(){
//         console.log("Human is walking");
//     }
//     running(){
//         console.log("Human is running");
//     }
// }

// let obj = new Human();
// console.log(obj.age);
// console.log(obj.wt);
// // console.log(obj.ht); // This will cause an error since ht is private

// obj.walking();





// class Human {
//     // properties
//     age = 20;
//     wt = 70;
//     #ht = 5.5; // private

//     constructor(newAge, newWeight){
//         this.age = newAge;
//         this.wt = newWeight;
//     }

//     // behaviour
//     walking(){
//         console.log("Human is walking");
//     }
//     running(){
//         console.log("Human is running");
//     }

//     get fetchHeight(){
//         return this.#ht;
//     }
//     set modifyHeight(val){
//         this.#ht = val;
//     }
// }

// let obj = new Human();
// console.log(obj.fetchHeight);
// // console.log(obj.ht); // This will cause an error since ht is private

// obj.walking();



// function sayName(myName = " Thakur"){
//     console.log("My name is: ", myName);
// }

// sayName();

// //OR
// function sayName(myName = " Thakur"){
//     console.log("My name is: ", myName);
// }

// sayName("Sushil");


// function solve(value = {age: 20, wt: 70, ht: 5.5}){
//     console.log("Welcome, value");
//     }
//     solve();

// function solve(value = "Sushil"){
//     console.log("Welcome ->", value);
//     }
//     solve(null);


function getAge() {
    return 20;
}

function utility(name, age) {
    console.log(name, age);
}

utility("Sushil", getAge());