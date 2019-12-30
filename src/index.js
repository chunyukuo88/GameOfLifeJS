const myApp = document.getElementById("app");

const gridWrapper = document.createElement("wrapper");
gridWrapper.classList.add("grid-wrapper");
myApp.append(gridWrapper);

const cellGrid = document.createElement("section");
cellGrid.classList.add("grid");
gridWrapper.append(cellGrid);



function changeColor(){
  const cell = document.getElementsByName("p")[0];
  cell.innerText = "some text";
}

function createCells (){
  for (let i = 0 ; i < 36 ; i++){
    const gridItem = document.createElement("p");
    //This innerText uses the unicode blank character, NOT a space:
    gridItem.innerText = "⠀";
    gridItem.id += " grid-item-" + i;
    gridItem.addEventListener("click", changeColor);
    cellGrid.append(gridItem);
  }
}

createCells();

