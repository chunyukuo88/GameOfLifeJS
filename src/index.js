const cellsAndGrid = require("./js/cellsAndGrid");
const getInfoFromApi = require("./js/fetchCellsFromAPI");

cellsAndGrid.generateGrid();
getInfoFromApi.getInfoFromApi();
getInfoFromApi.produceDishes();