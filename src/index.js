const cellsAndGrid = require("./js/cellsAndGrid");
const getInfoFromApi = require("./js/fetchCellsFromAPI");
const heading = require("./js/heading");

heading.generateHeading();
cellsAndGrid.generateGrid();
getInfoFromApi.getInfoFromApi();
getInfoFromApi.produceDishes();


/* Figure out how to:
-   Insert grid inside grid wrapper.
-   .
*/

/* DONE!
-   Insert grid inside grid wrapper.
*/