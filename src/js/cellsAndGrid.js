const onUserClick = require("./cellColors");


module.exports = {        

  // Note that the wrapper is given an ID, not a class.
  generateGridWrapper(){
    const myApp = document.getElementById("app");
    const gridWrapper = document.createElement("wrapper");    
    gridWrapper.id = "gridWrapper";
    myApp.append(gridWrapper);
  },

  generateCells(generalArray){
    const cellGrid = document.createElement("section");   
    cellGrid.id = "cellGrid";    
    document.getElementById("gridWrapper").appendChild(cellGrid);

    for (let index = 0; index < generalArray.length; index++) {
      let element = generalArray[index];
      const cell = document.createElement("p");
      
      cell.style.background = element === 1 ? 'chartreuse' : 'white';

      cell.classList.add("grid-item-" + index);
      cell.id = ("grid-ID-" + index);
      document.getElementById("cellGrid").append(cell);
      
      cell.addEventListener("load", 
                            onUserClick.updateColorAndArray(cell, element, generalArray));
    }
    return generalArray;
  },

  updateVisualization(generalArray){
    for (let index = 0; index < generalArray.length; index++) {
        cell = document.getElementById("grid-ID-"+index);
        cell.style.background = generalArray[index] === 1 ? 'fuchsia' : 'white';
    }
  }

}