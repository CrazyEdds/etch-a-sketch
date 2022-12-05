"use strict";
let gridContainer = document.getElementById("gridContainer");

function createDivs(quantity) {
    for (let num = 1; num <= quantity; num++) {
        let newDiv = document.createElement("div");
        newDiv.classList.add("gridItem");
        newDiv.addEventListener("mouseenter", changeColor);
        newDiv.addEventListener("mouseleave", changeColor);
        gridContainer.appendChild(newDiv);
    }
}

function changeColor(event) {
    this.classList.toggle("hoverColor");
}

function adjustSize(quantity) {
    let squareRoot = Math.ceil(Math.sqrt(quantity));
    gridContainer.style.gridTemplateColumns = "auto ".repeat(squareRoot).trimEnd();
    console.log(document.getElementsByClassName("gridItem")[0].style.width);

    /* for (let field of document.getElementsByClassName("gridItem")) {
        field.style.height = field.style.width;
    } */
}

function enterFieldAmount() {
    while(true) {
        let fieldsAmount = prompt("How many fields? Your answer must be a number and between 0 and 101");
        if (Number.parseInt(fieldsAmount) && fieldsAmount > 0 && fieldsAmount <= 100) {
            return fieldsAmount;
        }
        else {
            alert("Please read the requirements for your answer!")
        }
    }
}

let fieldsAmount = enterFieldAmount();
createDivs(fieldsAmount);
adjustSize(fieldsAmount);

