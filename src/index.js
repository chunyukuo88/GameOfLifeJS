//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
    cellsAndGrid.generateGridWrapper();

    let generalArray = [
        1, 0, 0, 0, 0, 0, 0, 0, 
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
        panel.createButton(generalArray, "Blank"); //ID: 1
        panel.createButton(generalArray, "Tumbler"); //ID: 2
        panel.createButton(generalArray, "Propellors");//ID: 3
        panel.createLogButton(generalArray);
//DATA
// const renderCellsFromAPI = require("./js/renderCellsFromAPI");
//     const apiCells = renderCellsFromAPI.updateBasedOnAPI;
//     apiCells(generalArray, 1);







//------- Keep this just for purposes of testing the fetch()------

// ---------------------------------------------------------------