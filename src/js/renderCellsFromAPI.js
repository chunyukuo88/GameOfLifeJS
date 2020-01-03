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
                let k = 0;
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++){
                        let value = cell.innerText === '@' ? 1 : 0;
                        k++;
                        cellArray.push(value);
                        }
                    }
                console.log(cellArray);
                }
            )
            .catch("Fetch failed");
            return cellArray;
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