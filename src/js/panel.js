const renderCellsFromAPI = require("./renderCellsFromAPI");
const alg = require("./algorithm");

module.exports = {

    welcomePanel(){
        const welcome = document.createElement("section");
        welcome.id = "welcomePanel";
        let wrapper = document.getElementById("gridWrapper");
        wrapper.append(welcome);

        const presetHeading = document.createElement("a");
        presetHeading.id = "preset-heading";
        presetHeading.innerText = "Preset Patterns:"
        welcome.appendChild(presetHeading);
    },

    createPresetButton(generalArray, buttonName){
        button = document.createElement("a");
        button.classList.add("panel-button");
        button.innerText = buttonName;
        let dishIdNumber = 1;
        
        switch (buttonName) {
            case "Blank":       dishIdNumber = 0; break;
            case "Propellors":  dishIdNumber = 1; break;
            case "Tumbler":     dishIdNumber = 2; break;
            default: break;
        }    
            let welcome = document.getElementById("welcomePanel");
            button.onclick = () =>{
                renderCellsFromAPI.updateBasedOnAPI(generalArray, dishIdNumber);
            }
            welcome.appendChild(button);
    },

    createStepHeading(){
        const stepHeading = document.createElement("a");
        stepHeading.id = "step-heading";
        stepHeading.innerText = "\nGive it a whirl!"

        const welcome = document.getElementById("welcomePanel");
        welcome.appendChild(stepHeading);
    },

    createStepWrapper(){
        const stepWrapper = document.createElement("wrapper");
        stepWrapper.id = "step-wrapper";
        
        const welcome = document.getElementById("welcomePanel");
        welcome.appendChild(stepWrapper);   
    },

    createStepButton(generalArray){
        button = document.createElement("a");
        button.id = "step";
        button.classList.add("panel-button");
        button.innerText =  "Step";
        button.onclick = ()=>{
           alg.evaluateDish(generalArray);
           return generalArray;
        };
        const stepWrapper = document.getElementById("step-wrapper");
        stepWrapper.appendChild(button);        
    },

    // sleep(milliseconds) {
    //     return new Promise((resolve) => setTimeout(resolve, milliseconds));
    // },
    
    createPlayButton(generalArray){
        button = document.createElement("a");
        button.id = "play-pause";
        button.classList.add("panel-button");
        button.innerText =  "▶";
        // button.onclick = ()=> {
        //     x = 0;
        //     while (x < 15){
        //         setTimeout(() => {  alg.evaluateDish(generalArray); }, 2000);
        //     }
        // };
        const stepWrapper = document.getElementById("step-wrapper");
        stepWrapper.appendChild(button);   
    }
}