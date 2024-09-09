let sketchPad = document.querySelector('.container')
let colorMode = document.querySelector('.toggleColor')
let setGridSize = document.querySelector('.setGridSize')
let clear = document.querySelector('.clearGrid')

// set default grid
let defaultSize = 12;
for (let i = 0; i < defaultSize * defaultSize; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.width = `calc(100% / ${defaultSize})`;
    cell.style.height = `calc(100% / ${defaultSize})`;
    sketchPad.appendChild(cell);
}
    
// set size of grid based on user input
let createGrid = function() {
    let size = prompt("What size grid would you like?", "Enter a number between 2 and 100")
    //check if user input is valid
    if (size < 2 || size > 100 || isNaN(size)) {
        alert("Please enter a number between 2 and 100");
        return
    }   
    // clear previous grid only if input is valid
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
        cell.removeAttribute('data-color-changed');
    });
}

// change color of cells on mouseover when lmb is pressed
sketchPad.addEventListener('mousemove', (event) => {
    if (event.buttons === 1 && event.target.matches('.cell')) {
        const cell = event.target;
        if (cell.classList.contains('rainbow') && !cell.getAttribute('data-color-changed')) {
            cell.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
            cell.setAttribute('data-color-changed', 'true');
        } else if (!cell.classList.contains('rainbow')) {
            cell.style.backgroundColor = 'black';
            cell.removeAttribute('data-color-changed');
        }
    }
});

// activate rainbow mode
function toggleColor() {
    let cell = document.querySelectorAll('.cell');
    cell.forEach((cell) => {
        cell.classList.toggle('rainbow');
    });
    // toggle rainbow button color
    colorMode.classList.toggle('rainbowOn')
}

setGridSize.addEventListener('click', createGrid);
clear.addEventListener('click', clearGrid);
colorMode.addEventListener('click', toggleColor);