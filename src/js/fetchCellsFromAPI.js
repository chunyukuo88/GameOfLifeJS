module.exports = {
    
    async getInfoFromApi() {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };

        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                for (let i = 0; i < 8; i++) {
                    for (let j = 0; j < 8; j++){
                    const rubbish = document.createElement("p");
                    rubbish.innerText = json[2].inputArray[i][j];
                    document.getElementById("junk").append(rubbish);
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