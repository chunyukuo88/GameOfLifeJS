


module.exports = {

    welcomePanel(){
        const welcome = document.createElement("section");
        welcome.id = "welcomePanel";
        let wrapper = document.getElementById("gridWrapper");
        wrapper.append(welcome);
    },

    createButton(buttonName){
        button = document.createElement("a");
        button.classList.add("panel-button");
        button.innerText =  buttonName;
        
        let welcome = document.getElementById("welcomePanel");
        welcome.appendChild(button);
    }
}