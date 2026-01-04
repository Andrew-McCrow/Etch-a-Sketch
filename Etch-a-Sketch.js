// Create a grid function
function createGrid(size) {
    const grid = document.getElementById('etch-a-sketch');
    grid.innerHTML = ''; // Clear existing grid
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }

    // Add hover effect to cells
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => {
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    });
});
}

// Initialize default grid
createGrid(16);

// Grid size button functionality
const gridSizeButton = document.getElementById('grid-size-button');
gridSizeButton.addEventListener('click', () => {
    let newSize = prompt("Enter new grid size (max 100):");
    newSize = Math.min(Math.max(parseInt(newSize), 1), 100);
    createGrid(newSize);
});

// Reset button functionality
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });
});