// //code 1
// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is para " + i;
//     document.body.appendChild(para);
// }
// const t2 = performance.now();

// console.log("total time by code 1: " + (t2-t1));




// // Code 2 is faster then code 1 
// //code2
// const t3 = performance.now();
// let mydiv = document.createElement('div')

// for(let i=1; i<=100; i++){
//     let para = document.createElement('p')
//     para.textContent = "This is para" + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log("total time by code 2: " + (t4-t3));


// to add elemrnts using document fragment
let fragment = document.createDocumentFragment();
for(let i=1; i<=100; i++){
    let para = document.createElement('p');
    // i+1 or i + "abc"
    para.textContent = "This is para"+ i + 1 ;
    //NO reflow ande No repaint for the below line 
    fragment.appendChild(para);
}
//the below line take 1 reflow and 1 repaint
document.body.appendChild(fragment);