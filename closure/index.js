//To make closure we need two things 1.function 2. function required data or lexical scope or surrounding state
//One more important is the nearest part of the console can be printed first

//     let name = "Sushil"; //let -> block scoped  
//     function outerFunction(){     //name is a local variable created by init
//     function innerFunction(){  //displayName(){
       
//         console.log(name); //use variable decleared in the parent function
//         }
//         innerFunction();
// }
// outerFunction();





 
 let name = "Sushil"; //let -> block scoped  
    function outerFunction(){     //name is a local variable created by init
    function innerFunction(){  //displayName(){
       let name = "Thakur";
        console.log(name); //use variable decleared in the parent function
        }
        innerFunction();
}
outerFunction();