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
            case "Blank":
                dishIdNumber = 1;
                break;
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
            button.onclick = () =>{
                renderCellsFromAPI.updateBasedOnAPI(generalArray, dishIdNumber);
                console.log(buttonName + " has been clicked.");
            }
            welcome.appendChild(button);
    },

    createLogButton(generalArray){
        button = document.createElement("a");
        button.innerText =  "Log-Array";
        button.onclick = ()=>{
            console.log("Updated array:\n\n" + 
            generalArray.slice(0, 7) + "\n" +
            generalArray.slice(8, 15) + "\n" +
            generalArray.slice(16, 23) + "\n" +
            generalArray.slice(24, 31) + "\n" +
            generalArray.slice(32, 39) + "\n" +
            generalArray.slice(40, 47) + "\n" +
            generalArray.slice(48, 55) + "\n" +
            generalArray.slice(56, 63))
        };
        let welcome = document.getElementById("welcomePanel");
        welcome.appendChild(button);
    }
}