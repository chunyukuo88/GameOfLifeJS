const cellsAndGrid = require("./js/cellsAndGrid");
const extractFromApi = require("./js/fetchCellsFromAPI");
const heading = require("./js/heading");


heading.generateHeading();
cellsAndGrid.generateGrid();
// extractFromApi.produceDishes(arrays);

let arrays = extractFromApi.getInfoFromApi();
console.log(arrays);