// let anchorElement = document.getElementById("fanchor");

// anchorElement.addEventListener('click', function(event) {
//     event.preventDefault();
//     anchorElement.textContent = "You have to click here";
// }); 


// This code snippet is used to change the text of the first paragraph when it is clicked. It also adds an event listener to all paragraph elements on the page, so that when any paragraph is clicked, an alert will display the text of that paragraph.

let paras = document.querySelectorAll("p");

function alertPara(event) {
    alert("You clicked on para:" + event.target.textContent);
}

for(let i=0; i<paras.length; i++) {
    let para = paras[i];
    console.log("evevtListener added");
    para.addEventListener("click", alertPara);
}