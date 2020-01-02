const cellsAndGrid = require("./js/cellsAndGrid");
const extractFromApi = require("./js/fetchCellsFromAPI");
const heading = require("./js/heading");


heading.generateHeading();
cellsAndGrid.generateGrid();



console.log(extractFromApi.getInfoFromApi());

const junk = document.getElementById("junk");

const APIdata = extractFromApi.getInfoFromApi();

const garbage = document.createElement("h2");
garbage.innerText = "garbage";
junk.append(garbage);
