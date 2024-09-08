let sketchPad = document.querySelector('.container')
let colorMode = document.querySelector('.toggleColor')
let setGridSize = document.querySelector('.setGridSize')
let clear = document.querySelector('.clearGrid')

// set default grid size
let defaultSize = 12;
for (let i = 0; i < defaultSize * defaultSize; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    // set size of cells based on default size
    cell.style.width = `calc(100% / ${defaultSize})`;
    cell.style.height = `calc(100% / ${defaultSize})`;
    sketchPad.appendChild(cell);
}
    
// set size of cells based on user input
let createGrid = function() {
    let size = prompt("What size grid would you like?", "Enter a number between 2 and 100")

    //check if user input is valid
    if (size < 2 || size > 100 || isNaN(size)) {
        alert("Please enter a number between 2 and 100");
        return
    }   

    // clear previous grid if input is valid
    sketchPad.replaceChildren();

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `calc(100% / ${size})`;
        cell.style.height = `calc(100% / ${size})`;
        sketchPad.appendChild(cell);
        // add rainbow class if mode is selected
        if (colorMode.classList.contains('rainbowOn')) {
            cell.classList.toggle('rainbow');
        }   
    }

   
}

// clear sketchPad
function clearGrid() {
    let cells = document.querySelectorAll('div');
    cells.forEach((cell) => {
        cell.style.backgroundColor = 'white';
    });
}

// add mouseover event listener to cells using event delegation
sketchPad.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('cell')) {
        const cell = event.target;
        if (cell.classList.contains('rainbow')) {
            cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else {
            cell.style.backgroundColor = 'black';
        }
    }
});

// activate rainbow mode
function toggleColor() {
    let cell = document.querySelectorAll('.cell');
    let toggleColorButton = document.querySelector('.toggleColor');
    cell.forEach((cell) => {
        cell.classList.toggle('rainbow');
    });
    // toggle rainbow button color
    toggleColorButton.classList.toggle('rainbowOn')
}

setGridSize.addEventListener('click', createGrid);
clear.addEventListener('click', clearGrid);
colorMode.addEventListener('click', toggleColor);