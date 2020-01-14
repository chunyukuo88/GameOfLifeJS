

//TITLE
const heading = require("./js/heading");
    heading.generateHeading();

//LAYOUT
const cellsAndGrid = require("./js/cellsAndGrid");
cellsAndGrid.generateGridWrapper();
    
    import { observable, observe } from "mobx"
    let generalArray = observable([
        1, 0, 0, 0, 0, 0, 0, 0, 
        0, 1, 0, 0, 0, 0, 0, 0, 
        0, 0, 1, 0, 0, 0, 0, 0, 
        0, 0, 0, 1, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
        0, 0, 0, 0, 0, 0, 0, 0, 
    ]);
    cellsAndGrid.generateCells(generalArray);
    
    observe(generalArray, change =>console.log("w00000000000000000t"));



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


//updated from Garbage Overflow:
//https://stackoverflow.com/questions/59701279/cause-any-changes-made-to-an-array-to-trigger-a-function-call-vanilla-js/59701296?noredirect=1#comment105567296_59701296
// import { BehaviorSubject } from 'rxjs';
// messageSource = new BehaviorSubject(false);
// currentMessage = this.messageSource.asObservable();

// changeMessage(message) {
//     this.messageSource.next(message);
// }

// currentMessage.subscribe(val => {
//     //logic
// })



//Another brilliant idea from Garbage Overflow:
//https://stackoverflow.com/questions/5100376/how-to-watch-for-array-changes

// (function() {

//     if (!("Proxy" in window)) {
//       console.warn("Your browser doesn't support Proxies.");
//       return;
//     }
//     // a proxy for our array
//     var proxy = new Proxy(generalArray, {
//       apply: function(target, thisArg, argumentsList) {
//         return thisArg[target].apply(this, argumentList);
//       },
//       deleteProperty: function(target, property) {
//         console.log("Deleted %s", property);
//         return true;
//       },
//       set: function(target, property, value, receiver) {      
//         target[property] = value;
//         console.log("Set %s to %o", property, value);
//         return true;
//       }
//     });  
//     console.log("Current state of array: %o", generalArray);
// })();

