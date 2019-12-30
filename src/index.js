const myApp = document.querySelector(".myApp");
const gridWrapper = document.createElement("wrapper");
gridWrapper.classList.add("grid-wrapper");
myApp.append(gridWrapper);



function changeColor(){
  const cell = document.getElementsByName("p")[0];
  cell.innerText = "some text";
}

function createCells (){
  for (let i = 0 ; i < 25 ; i++){
    const gridItem = document.createElement("p");
    gridItem.classList.add("grid-item");
    //This innerText uses the unicode blank character, NOT a space:
    gridItem.innerText = "⠀";
    gridItem.addEventListener("click", changeColor);
    gridWrapper.append(gridItem);
  }
}

createCells();

