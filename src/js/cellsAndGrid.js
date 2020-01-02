const getCells = require("./fetchCellsFromAPI");

module.exports = {        

  // Note that the wrapper is given an ID, not a class.
  generateGridWrapper(){
    const myApp = document.getElementById("app");
    const gridWrapper = document.createElement("wrapper");    
    gridWrapper.id = "gridWrapper";
    myApp.append(gridWrapper);
  },

  generateCells(){
    const cellGrid = document.createElement("section");   
    cellGrid.id = "cellGrid";    
    document.getElementById("gridWrapper").appendChild(cellGrid);
  }

}