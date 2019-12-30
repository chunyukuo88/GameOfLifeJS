
function getInfoFromApi(){

const url = "http://localhost:8080/petri-dishes";
// const options = { method: "GET", headers: { "Accept": "application/json" } };

fetch(url) //, options
    .then(res => res.json())
    .then(function (petriDishes) {
        petriDishes.forEach( dish => {
            console.log(dish.inputArray);
            }
        )}
    );

console.log("howzit howzit");
}

module.exports = getInfoFromApi();