exports.getInfoFromApi = ()=> {

    const url = "http://localhost:8080/petri-dishes";
    const options = { method: "GET", headers: { "Accept": "application/json" } };
    let arrayOfPetriDishes = [];

    fetch(url, options)
        .then(res => res.json())
        .then(function (petriDishes) {
            petriDishes.forEach( dish => {
                arrayOfPetriDishes.push(dish);
                }
            )}
        );
    return arrayOfPetriDishes;
};

exports.produceDishes = (arrayOfPetriDishes)=> {
    const body = document.getElementById("app");
    
    const dish = document.createElement("section");
    let firstDish = arrayOfPetriDishes[0];
    console.log(firstDish);
    body.append(dish);

    // for (let index = 0; index < arrayOfPetriDishes.length; index++) {
    //   console.log("ITERATION #" + index);
    //   const dish = document.createElement("section");
    //   dish.innerText = arrayOfPetriDishes[i].inputArray;
    //   wrapper.append(dish);
    // }

    console.log("||||||||| This prints if produceDishes() runs ||||||||||");
};