//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
    cellsAndGrid.generateGridWrapper();
    cellsAndGrid.generateCells();

//DATA
const extractFromApi = require("./js/fetchCellsFromAPI");
    const apiCells = extractFromApi.getInfoFromApi;
    apiCells();