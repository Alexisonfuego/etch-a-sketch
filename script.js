let sketchPad = document.querySelector('.container')


let createGrid = function(size) {
    // let size = prompt("What size grid would you like?", "Enter a number between 2 and 100")
    sketchPad.innerHTML = '';

    for (let i = 0; i < size * size; i++) {
        let cell = document.createElement('div');
        sketchPad.appendChild(cell);
    }
}

createGrid(32);