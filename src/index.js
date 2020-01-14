

//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
cellsAndGrid.generateGridWrapper();
    
    import { observable, observe } from "mobx"
    let generalArray = observable([
        1, 0, 0, 0, 0, 0, 0, 0, 
        0, 1, 0, 0, 0, 0, 0, 0, 
        0, 0, 1, 0, 0, 0, 0, 0, 
        0, 0, 0, 1, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
    ]);
    cellsAndGrid.generateCells(generalArray);
    
    observe(generalArray, change => cellsAndGrid.updateVisualization(generalArray));



//BUTTONS
const panel = require("./js/panel");
    panel.welcomePanel();
        panel.createButton(generalArray, "Blank"); //ID: 1
        panel.createButton(generalArray, "Tumbler"); //ID: 2
        panel.createButton(generalArray, "Propellors");//ID: 3
        panel.createLogButton(generalArray);
