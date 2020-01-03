//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
    cellsAndGrid.generateGridWrapper();

    let generalArray = [
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
    ];

    cellsAndGrid.generateCells(generalArray);

//BUTTONS
const panel = require("./js/panel");
    panel.welcomePanel();
    panel.stepButton();

//DATA
const renderCellsFromAPI = require("./js/renderCellsFromAPI");
    const apiCells = renderCellsFromAPI.getInfoFromApi;
    apiCells(generalArray);
    console.log("General array: " + generalArray);

//EVALUATION
// const eval = require("./js/stepper");
//     const step = eval.stepper;
//     const input = document.getElementsByClassName("grid-item-1");
//     step(input);