function clearCanvas() {
    document.getElementById("container").innerHTML = '';
}

function newCanvas() {
    clearCanvas();
    let grootte = window.prompt("Hoe groot moet die canvas wees?");
    for (let index = 0; index < (grootte**2); index++) {
        let i = document.createElement("div");
        i.setAttribute("class", "rooster");
        i.addEventListener("mouseover", function(e) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            i.style.backgroundColor = `rgb(${r},${g},${b})`;
        });
        container.appendChild(i);
    }
    let boks = document.getElementById("container");
    boks.style.width = `calc(${grootte} * 6px)`;
}

function recreateCanvas() {
    clearCanvas();
    newCanvas();
}

newCanvas();

let skoon = document.getElementById("clear");

skoon.addEventListener("click", function(e) { 
    recreateCanvas();
});