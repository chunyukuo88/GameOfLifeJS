module.exports = {

    welcomePanel(){
        const welcome = document.createElement("section");
        welcome.id = "welcomePanel";
        let wrapper = document.getElementById("gridWrapper");
        wrapper.append(welcome);
    },

    stepButton(){
        const step = document.createElement("a");
        step.classList.add("step");
        step.innerText = "Step";
        let welcome = document.getElementById("welcomePanel");
        welcome.append(step);
    }

}