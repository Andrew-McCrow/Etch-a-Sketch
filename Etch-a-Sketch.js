const grid = document.getElementById('etch-a-sketch');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell);
    }
    grid.appendChild(row);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
});