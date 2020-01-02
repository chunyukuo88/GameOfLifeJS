const cellsAndGrid = require("./js/cellsAndGrid");
const extractFromApi = require("./js/fetchCellsFromAPI");
const heading = require("./js/heading");


heading.generateHeading();
cellsAndGrid.generateGrid();


// Attach this to a button
const junk = extractFromApi.getInfoFromApi;
junk();