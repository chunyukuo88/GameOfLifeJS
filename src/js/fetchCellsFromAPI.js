exports.getInfoFromApi = ()=> {

    const url = "http://localhost:8080/petri-dishes";
    const options = { method: "GET", 
                      headers: { "Content-type": "text/plain" } 
                    };
    let arrayOfPetriDishes = [];

    fetch(url, options)
        .then(res => res.json())
        .then( petriDishes => {
            petriDishes.forEach( dish => {
                arrayOfPetriDishes.push(dish);
                }
            )}
        );
    return arrayOfPetriDishes;
};

exports.produceDishes = (arrayOfPetriDishes)=> {
    // for (let index = 0; index < arrayOfPetriDishes.length; index++) {
    //   console.log("ITERATION #" + index);
    //   const dish = document.createElement("section");
    //   dish.innerText = arrayOfPetriDishes[i].inputArray;
    //   wrapper.append(dish);
    // }

    const body = document.getElementById("app");
    const dish = document.createElement("section");
    body.append(dish);

    if (Array.isArray(arrayOfPetriDishes)){
            console.log(arrayOfPetriDishes.length);
    }
};