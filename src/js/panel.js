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
            }
            welcome.appendChild(button);
    },

    createLogButton(generalArray){
        button = document.createElement("a");
        button.innerText =  "Log-Array";
        button.onclick = ()=>{
            console.log("Updated array:\n\n" + 
            generalArray.slice(0, 16) + "\n" +
            generalArray.slice(16, 32) + "\n" +
            generalArray.slice(32, 48) + "\n" +
            generalArray.slice(48, 64) + "\n" +
            generalArray.slice(64, 80) + "\n" +
            generalArray.slice(80, 96) + "\n" +
            generalArray.slice(96, 112) + "\n" +
            generalArray.slice(112, 128) + "\n" +
            generalArray.slice(128, 144) + "\n" +
            generalArray.slice(144, 160) + "\n" +
            generalArray.slice(160, 176) + "\n" +
            generalArray.slice(176, 192) + "\n" +
            generalArray.slice(176, 192) + "\n" +
            generalArray.slice(192, 208) + "\n" +
            generalArray.slice(208, 224) + "\n" +
            generalArray.slice(224, 240) + "\n" +
            generalArray.slice(240)
            )
        };
        let welcome = document.getElementById("welcomePanel");
        welcome.appendChild(button);
    },

    createStepButton(generalArray){
        button = document.createElement("a");
        button.innerText =  "Step";
        button.onclick = ()=>{
           alg.evaluateDish(generalArray);
           //I should not have to have this onclick event trigger
           //the updateVisualization function because the general array already
           //has an observer that triggers whenever the values change.
           return generalArray;
        };
        let welcome = document.getElementById("welcomePanel");
        welcome.appendChild(button);

        
    }
}