module.exports = {

    async getInfoFromApi() {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "text/plain" } 
                        };
        let arrayOfPetriDishes = [];
    
        await fetch(url, options)
            .then(res => res.json())
            .then( petriDishes => {
                petriDishes.forEach( dish => {
                    arrayOfPetriDishes.push(dish);
                    }
                )}
            );

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