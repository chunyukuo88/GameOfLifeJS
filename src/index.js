//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
    cellsAndGrid.generateGridWrapper();
    cellsAndGrid.generateCells();

//BUTTONS
const panel = require("./js/panel");
    panel.welcomePanel();
    panel.stepButton();

//DATA
const extractFromApi = require("./js/renderCellsFromAPI");
    const apiCells = extractFromApi.getInfoFromApi;
    apiCells();

//EVALUATION
const eval = require("./js/stepper");
    const step = eval.stepper;
    const input = document.getElementsByClassName("grid-item-1");
    step(input);