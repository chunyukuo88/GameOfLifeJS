

//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
    cellsAndGrid.generateGridWrapper();
    let generalArray = [
        1, 0, 0, 0, 0, 0, 0, 0, 
        0, 1, 0, 0, 0, 0, 0, 0, 
        0, 0, 1, 0, 0, 0, 0, 0, 
        0, 0, 0, 1, 0, 0, 0, 0, 
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




// let arr = new Proxy(array, {
//     set() {
//       alert('array mutated');
//       return true;
//     }
//   });

// arr(generalArray);


//wrap observable around general array.
//the observable is infinite; it is never 'complete'.
//then have the observer make a function call.



//From https://www.youtube.com/watch?v=Tux1nhBPl_w&feature=emb_logo
// import { Observable } from 'rxjs';

// let button = document.querySelector('a');

// let xyz = Observable.fromEvent(button, 'click')
// 	.subscribe(
// 		(value) => console.log(value.clientX)
// );



import { fromEvent } from 'rxjs';

fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));