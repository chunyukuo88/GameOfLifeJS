const getCells = require("./renderCellsFromAPI");
const valuesFromGeneralArray = require("../index");
const onUserClick = require("./cellColors");

module.exports = {        

  // Note that the wrapper is given an ID, not a class.
  generateGridWrapper(){
    const myApp = document.getElementById("app");
    const gridWrapper = document.createElement("wrapper");    
    gridWrapper.id = "gridWrapper";
    myApp.append(gridWrapper);
  },

  generateCells(array){
    const cellGrid = document.createElement("section");   
    cellGrid.id = "cellGrid";    
    document.getElementById("gridWrapper").appendChild(cellGrid);
    let generalArray = array;

    // console.log("This is the array I want to color cells based on: " + generalArray);

    for (let index = 0; index < generalArray.length; index++) {
      let element = generalArray[index];
      const cell = document.createElement("p");
        
      cell.style.background = element === 1 ? 'orange' : 'white';

      cell.classList.add("grid-item-" + index);
      document.getElementById("cellGrid").append(cell);
      
      cell.addEventListener("load", 
                            onUserClick.updateColorAndArray(cell, element, generalArray),

                            );
    }
    return generalArray;
  },

  updateGeneralArray(cell, generalArray){

  }

}