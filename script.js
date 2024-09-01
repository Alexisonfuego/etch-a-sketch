let container = document.querySelector('.container')
container.classList.add('container')

let createGrid = function() {
    let size = prompt("What size would you like?", "Enter a number between 2 and 100")
    container.innerHTML = '';

    for (let i = 0; i < size; i++) {
        let square = document.createElement('div');
        square.classList.add('cell');
        square.innerText = ('test')
        container.appendChild(square);
    }
}

createGrid();