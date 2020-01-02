module.exports = {
    
    async getInfoFromApi() {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };
        let arrayOfPetriDishes = [];
    
        await fetch(url, options)
            .then(res => res.json())
            .then( petriDishes => {
                arrayOfPetriDishes = petriDishes;
                }
            )
            .catch("Fetch failed");
        return arrayOfPetriDishes;
    },
    








    produceDishes (arrayOfPetriDishes) {
    
        const body = document.getElementById("app");
        const dish = document.createElement("section");
        body.append(dish);

        if (Array.isArray(arrayOfPetriDishes)){
                console.log(arrayOfPetriDishes.length);
        }
    }
}