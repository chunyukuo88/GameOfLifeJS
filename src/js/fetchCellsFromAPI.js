module.exports = {
    
    async getInfoFromApi() {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };
    
        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                for (let index = 0; index < json.length; index++) {
                    const element = json[index];
                    const rubbish = document.createElement("p");
                    rubbish.innerText = json[index].inputArray[0];
                    document.getElementById("junk").append(rubbish);
                    
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