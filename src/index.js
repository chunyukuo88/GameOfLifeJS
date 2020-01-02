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
