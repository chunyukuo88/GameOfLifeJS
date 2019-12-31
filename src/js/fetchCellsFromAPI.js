exports.getInfoFromApi = ()=> {

    const url = "http://localhost:8080/petri-dishes";
    const options = { method: "GET", headers: { "Accept": "application/json" } };
    const arrayOfPetriDishes = [];

    fetch(url, options)
        .then(res => res.json())
        .then(function (petriDishes) {
            petriDishes.forEach( dish => {
                arrayOfPetriDishes.push(dish);
                }
            )}
        );
        console.log("||||||||| This prints if getInfoFromApi() works ||||||||||");
    return arrayOfPetriDishes;
};

exports.produceDishes = ()=> {
    const wrapper = document.getElementsByClassName("grid-wrapper");
    let arrayOfPetriDishes = getInfoFromApi();
    
    for (let index = 0; index < arrayOfPetriDishes.length; index++) {
      console.log("ITERATION #" + index);
      const dish = document.createElement("wrapper");
      dish.innerText = arrayOfPetriDishes[i].inputArray;
      wrapper.append(dish);
    }
    console.log("||||||||| This prints if produceDishes() works ||||||||||");
};