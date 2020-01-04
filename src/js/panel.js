


module.exports = {

    welcomePanel(){
        const welcome = document.createElement("section");
        welcome.id = "welcomePanel";
        let wrapper = document.getElementById("gridWrapper");
        wrapper.append(welcome);
    },

    createButtons(buttonName){
        buttonName = document.createElement("a");
        buttonName.classList.add("panel-button");
        buttonName.innerText = buttonName;
        let welcome = document.getElementById("gridWrapper");
        welcome.append(buttonName);
    }


    // ,

    // presetDishButtons(){
    //     const clear = document.createElement("a");
    //     clear.classList.add("panel-button");
    //     clear.innerText = "Clear";
    //     let welcome = document.getElementById("welcomePanel");
    //     welcome.append(clear);
    // },

    // stepButton(){
    //     const step = document.createElement("a");
    //     step.classList.add("panel-button");
    //     step.innerText = "Step";
    //     let welcome = document.getElementById("welcomePanel");
    //     welcome.append(step);
    // }

}