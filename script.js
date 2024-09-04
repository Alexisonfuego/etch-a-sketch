let sketchPad = document.querySelector('.container')


let createGrid = function() {
    let size = prompt("What size grid would you like?", "Enter a number between 2 and 100")
    sketchPad.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        // set size of cells based on user input
        cell.style.width = `calc(100% / ${size})`;
        cell.style.height = `calc(100% / ${size})`;
        sketchPad.appendChild(cell);
    }
}

createGrid();