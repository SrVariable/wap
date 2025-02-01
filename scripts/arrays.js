function createArrayContainer(array) {
    const arrayContainer = document.createElement('div');
    arrayContainer.className = 'array';

    const arrayCell = document.createElement('section');
    array.forEach((element) => {
        const cell = document.createElement('div');
        cell.className = 'array-cell';
        cell.innerText = `${element}`;
        arrayCell.appendChild(cell);
    });
    arrayContainer.appendChild(arrayCell);
    
    const arrayIndex = document.createElement('section');
    array.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.className = 'array-index';
        cell.innerText = `${index}`;
        arrayIndex.appendChild(cell);
    });
    arrayContainer.appendChild(arrayIndex);
    return arrayContainer;
}
