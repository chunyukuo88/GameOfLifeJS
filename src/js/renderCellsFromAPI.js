const colorChanger = require("./cellColors");

module.exports = {
    
    async getInfoFromApi() {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };

        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                // Doing it this way produces a grid of 64 cells, as opposed to the format
                // of the required input, which is 8 rows (arrays) of 8 cells apiece.
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++){
                        const cell = document.createElement("p");
                        cell.innerText = json[2].inputArray[i][j];
                        colorChanger.apiColors(cell); //Applies background-color AND removes the '@' and '.' from the API data.
                        cell.classList.add("grid-item");
                        cell.addEventListener("load", colorChanger.makeCellsColorChangeable(cell));
                        document.getElementById("cellGrid").append(cell);
                        }
                    }
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