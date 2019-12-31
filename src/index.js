const cellsAndGrid = require("./js/cellsAndGrid");
const getInfoFromApi = require("./js/fetchCellsFromAPI");

cellsAndGrid.generateGrid();
getInfoFromApi.getInfoFromApi();
getInfoFromApi.produceDishes();


/* FIGURE OUT HOW TO:
-   Insert grid inside grid wrapper.
-   .
*/