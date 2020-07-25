const main = document.querySelector("#main");

const resetButton = document.createElement('button');
resetButton.setAttribute('id', 'resetButton');
resetButton.setAttribute('onclick', 'resetGrid()');
resetButton.textContent = "Reset Grid";

const resizeButton = document.createElement('button');
resizeButton.setAttribute('id','resizeButton');
resizeButton.setAttribute('onclick', 'resetResize()');
resizeButton.textContent = "New Grid Size";

const rgbButton = document.createElement('button');
rgbButton.setAttribute('id', 'rgbButton');
rgbButton.setAttribute('onclick', 'rgbGrid()');
rgbButton.textContent = "RGB Mode";

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'container');

main.appendChild(resetButton);
main.appendChild(resizeButton);
main.appendChild(rgbButton);
main.appendChild(gridContainer);

function random_bg_color(){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

let initSize = 16;

function initGrid(y = initSize,color='black'){
    gridContainer.style.gridTemplateRows = `repeat(${y}, auto)`;
    gridContainer.style.gridTemplateColumns = `repeat(${y}, auto)`;
    for (var i = 0; i < (y*y); i++ ){
        const square = document.createElement('div');
        square.setAttribute('class','grid-item');
        square.style.borderStyle='dashed';
        square.style.borderWidth='1px';
        square.style.borderColor='gray';
        square.addEventListener('mouseenter', e => {
            square.style.backgroundColor = `${color}`;
        });
        gridContainer.appendChild(square);
    }
}
initGrid();

function clearGrid() {
    gridContainer.innerHTML="";
}

function resetGrid(){
    clearGrid();
    initGrid();
}

function resetResize(){
    initSize = prompt("Enter new grid size (SxS): ");
    clearGrid();
    initGrid();
}

function rgbGrid(){
    clearGrid();
    // gridContainer.style.gridTemplateRows = `repeat(${y}, auto)`;
    // gridContainer.style.gridTemplateColumns = `repeat(${y}, auto)`;
    for (var i = 0; i < (initSize*initSize); i++ ){
        const square = document.createElement('div');
        square.setAttribute('class','grid-item');
        square.style.borderStyle='dashed';
        square.style.borderWidth='1px';
        square.style.borderColor='gray';
        square.addEventListener('mouseenter', e => {
            square.style.backgroundColor = random_bg_color();
        });
        gridContainer.appendChild(square);
    }
}
