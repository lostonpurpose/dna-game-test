window.addEventListener("DOMContentLoaded", () => {
    
    const colordDom = "blue";
    const colorRec = "yellow";

    const gen2one = document.getElementById("2-gen-1");
    const gen2two = document.getElementById("2-gen-2");
    const gen2three = document.getElementById("2-gen-3");
    const gen2four = document.getElementById("2-gen-4");

    const secondGen = document.querySelectorAll(".second");

    function determineColor() {
        let randomizer = (Math.floor(Math.random() * 4 )  + 1);
        if (randomizer === 1) {
            return colorRec;
        }
        else {
            return colordDom;
        }
    };

    // gen2one.classList.add("color-dom")

    secondGen.forEach((child) => {

        let getColor = determineColor();

        if (getColor === colorRec) {
            child.classList.add("color-rec");
        }
        else {
            child.classList.add("color-dom");
        }
    });
});