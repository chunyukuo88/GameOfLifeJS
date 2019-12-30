
function generateGrid() {
        const myApp = document.getElementById("app");
        
        const gridWrapper = document.createElement("wrapper");
        gridWrapper.classList.add("grid-wrapper");
        myApp.append(gridWrapper);
        
        const cellGrid = document.createElement("section");
        cellGrid.classList.add("grid");
        gridWrapper.append(cellGrid);

        for (let i = 0 ; i < 64 ; i++){
          const gridItem = document.createElement("p");
            gridItem.innerText = "@"; // Use the unicode blank character "⠀" for production build;
            gridItem.className += " grid-item-" + i;
            cellGrid.append(gridItem);
        }
}


module.exports = generateGrid();