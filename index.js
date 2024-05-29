document.getElementById('bingoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    generateBingoTable(name);
});

function generateBingoTable(name) {
    const bingoTableContainer = document.getElementById('bingoTableContainer');

    const tableWrapper = document.createElement('div');
    tableWrapper.className = 'tableWrapper';

    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const headers = ['B', 'I', 'N', 'G', 'O'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 5; j++) {
            const cell = document.createElement('td');
            const number = generateNumber(i, name, j);
            cell.textContent = number;
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }
    table.appendChild(tbody);

    const tableTitle = document.createElement('h2');
    tableTitle.textContent = `Bingo de ${name}`;
    tableWrapper.appendChild(tableTitle);
    tableWrapper.appendChild(table);
    bingoTableContainer.appendChild(tableWrapper);
}

function generateNumber(column, name, row) {
    const base = column * 15 + 1;
    const range = 15;
    const nameCharCodeSum = name.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const randomNumber = (nameCharCodeSum + row) % range;
    return base + randomNumber;
}