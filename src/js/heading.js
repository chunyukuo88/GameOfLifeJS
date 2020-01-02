exports.generateHeading = () => {

    const myApp = document.getElementById("app");
    const heading = document.createElement("h1");
    heading.innerText = "Chunyu Kuo's Game of Life";
    myApp.append(heading);
};