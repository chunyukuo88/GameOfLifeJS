exports.generateHeading = () => {

    const myApp = document.getElementById("app");
    const heading = document.createElement("h1");
    heading.innerText = "Alex's Game of Life";
    myApp.append(heading);
};