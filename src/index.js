//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
    cellsAndGrid.generateGridWrapper();

    let generalArray = [
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
    ];

    cellsAndGrid.generateCells(generalArray);

//BUTTONS
const panel = require("./js/panel");
    panel.welcomePanel();
    panel.stepButton();

//DATA
const renderCellsFromAPI = require("./js/renderCellsFromAPI");
    const apiCells = renderCellsFromAPI.getInfoFromApi;
    apiCells(generalArray);
    

// Keep this just for purposes of testing the fetch()--------------
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
      };

    const doSomething = async () => {
        await sleep(2000);
        console.log("General array: " + generalArray);
        
      }
      doSomething();
// ---------------------------------------------------------------