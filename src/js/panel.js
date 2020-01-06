const renderCellsFromAPI = require("./renderCellsFromAPI");


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
            case "Tumbler":
                dishIdNumber = 2;
                break;
            case "Propellors":
                dishIdNumber = 3;
                break;
            default:
                break;
        }    
            let welcome = document.getElementById("welcomePanel");
            button.onclick = renderCellsFromAPI.updateBasedOnAPI(generalArray, dishIdNumber);
            welcome.appendChild(button);
    },

    createLogButton(generalArray){
        button = document.createElement("a");
        button.innerText =  "Log-Array";
        button.onclick = ()=>{console.log("Updated array:\n\n" + generalArray)};
        let welcome = document.getElementById("welcomePanel");
        welcome.appendChild(button);
    }
}