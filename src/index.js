const cellsAndGrid = require("./js/cellsAndGrid");
const extractFromApi = require("./js/fetchCellsFromAPI");
const heading = require("./js/heading");


heading.generateHeading();
cellsAndGrid.generateGrid();


let arrays = extractFromApi.getInfoFromApi();
const ApiInfo = document.createElement("div");
ApiInfo.innerText = arrays;
document.getElementById("gridWrapper").append(ApiInfo);

console.log(arrays);