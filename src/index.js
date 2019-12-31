const cellsAndGrid = require("./js/cellsAndGrid");
const extractFromApi = require("./js/fetchCellsFromAPI");
const heading = require("./js/heading");

let arrays = extractFromApi.getInfoFromApi(0);

heading.generateHeading();
cellsAndGrid.generateGrid();
extractFromApi.produceDishes(arrays);