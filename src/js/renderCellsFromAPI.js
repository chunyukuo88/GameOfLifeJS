const colorChanger = require("./cellColors");
// const populateCellArray = require("./cellArrayEval");

module.exports = {
    
    async getInfoFromApi() {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };
        let cellArray = [];
        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                // Note that this produces a grid of 64 cells, as opposed to the format
                // of the required input, which is 8 arrays of arrays, each 8 cells apiece.
                let k = 0;
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++){
                        const cell = document.createElement("p");
                        cell.innerText = json[2].inputArray[i][j];
                        let value = cell.innerText === '@' ? 1 : 0;
                        colorChanger.apiColors(cell); //Applies background-color AND removes the '@' and '.' from the API data.
                        cell.classList.add("grid-item-" + k);
                        k++;
                        cellArray.push(value);
                        cell.addEventListener("load", colorChanger.makeCellsColorChangeable(cell));
                        document.getElementById("cellGrid").append(cell);
                        }
                    }
                console.log(cellArray);
                }
            )
            .catch("Fetch failed");
    },
    







// I don't think this is necessary anymore...
    // produceDishes (arrayOfPetriDishes) {
    
    //     const body = document.getElementById("app");
    //     const dish = document.createElement("section");
    //     body.append(dish);

    //     if (Array.isArray(arrayOfPetriDishes)){
    //             console.log(arrayOfPetriDishes.length);
    //     }
    // }
}