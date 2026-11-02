


function changeText() {
    let fpara = document.getElementById("fpara");
fpara.textContent = "This is the first paragraph.";
}
let fpara = document.getElementById("fpara");

fpara.addEventListener("click", changeText);