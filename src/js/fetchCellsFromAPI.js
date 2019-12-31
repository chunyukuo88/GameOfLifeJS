
function getInfoFromApi(){

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
        console.log("getInfoFromApi function works");
    return arrayOfPetriDishes;
}

function produceDishes(){
    const myApp = document.getElementById("app");
    let arrayOfPetriDishes = getInfoFromApi();
    
    for (let index = 0; index < arrayOfPetriDishes.length; index++) {
      const dish = document.createElement("p");
      dish.innerText = arrayOfPetriDishes[i].inputArray;
      myApp.append(dish);
      console.log("ITERATION #" + index);
    }
  }

// module.exports = getInfoFromApi, produceDishes;