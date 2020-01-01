const cellsAndGrid = require("./js/cellsAndGrid");
const extractFromApi = require("./js/fetchCellsFromAPI");
const heading = require("./js/heading");


heading.generateHeading();
cellsAndGrid.generateGrid();


let arrays = extractFromApi.getInfoFromApi();
const ApiInfo = document.createElement("div");
for (let index = 0; index < arrays.length; index++) {
    const element = array[index];
    ApiInfo.innerText = arrays;
    document.getElementById("gridWrapper").append(ApiInfo);
}

console.log(arrays);