const cellsAndGrid = require("./cellsAndGrid");
const renderCellsFromAPI = require("./renderCellsFromAPI");
const alg = require("./algorithm");

module.exports = {

    welcomePanel(){
        const welcome = document.createElement("section");
        welcome.id = "welcomePanel";
        let wrapper = document.getElementById("gridWrapper");
        wrapper.append(welcome);
    },

    createButton(generalArray, buttonName){
        button = document.createElement("a");
        button.classList.add("panel-button-" + buttonName);
        button.innerText =  buttonName;
        let dishIdNumber = 1;
        
        switch (buttonName) {
            case "Blank":
                dishIdNumber = 0;
                break;
            case "Propellors":
                dishIdNumber = 1;
                break;
            case "Tumbler":
                dishIdNumber = 2;
                break;
            default:
                break;
        }    
            let welcome = document.getElementById("welcomePanel");
            button.onclick = () =>{
                renderCellsFromAPI.updateBasedOnAPI(generalArray, dishIdNumber);
                //Clear grid cells
                //Grid cells re-populate
            }
            welcome.appendChild(button);
    },

    createLogButton(generalArray){
        button = document.createElement("a");
        button.innerText =  "Log-Array";
        button.onclick = ()=>{
            console.log("Updated array:\n\n" + 
            generalArray.slice(0, 8) + "\n" +
            generalArray.slice(8, 16) + "\n" +
            generalArray.slice(16, 24) + "\n" +
            generalArray.slice(24, 32) + "\n" +
            generalArray.slice(32, 40) + "\n" +
            generalArray.slice(40, 48) + "\n" +
            generalArray.slice(48, 56) + "\n" +
            generalArray.slice(56))
        };
        let welcome = document.getElementById("welcomePanel");
        welcome.appendChild(button);
    },

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     },

    createStepButton(generalArray){
        button = document.createElement("a");
        button.innerText =  "Step";
        button.onclick = ()=>{
           generalArray = alg.evaluateDish(generalArray);
           console.log("\n\n=================\n\n\n")
           cellsAndGrid.updateVisualization(generalArray);
        };
        let welcome = document.getElementById("welcomePanel");
        welcome.appendChild(button);
    }
}