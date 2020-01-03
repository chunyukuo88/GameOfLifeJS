//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
    cellsAndGrid.generateGridWrapper();

    let generalArray = [
        0, 1, 0, 0, 0, 0, 0, 0, 
        0, 0, 1, 0, 0, 0, 0, 0, 
        1, 1, 1, 0, 0, 0, 0, 0, 
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
const extractFromApi = require("./js/renderCellsFromAPI");
    const apiCells = extractFromApi.getInfoFromApi;
    generalArray = apiCells();

//EVALUATION
const eval = require("./js/stepper");
    const step = eval.stepper;
    const input = document.getElementsByClassName("grid-item-1");
    step(input);