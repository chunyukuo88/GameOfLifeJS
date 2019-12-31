exports.generateGrid = () => {        

      const myApp = document.getElementById("app");
      const gridWrapper = document.createElement("wrapper");    
      const cellGrid = document.createElement("section");   
      
      gridWrapper.id = "gridWrapper";
      cellGrid.classList.add("cellGrid");    
      
      for (let i = 0 ; i < 64 ; i++){
        const gridItem = document.createElement("p");
        gridItem.innerText = "@"; // Use the unicode blank character "⠀" for production build;
        gridItem.className += " grid-item-" + i;
        cellGrid.append(gridItem);
      }
      
      myApp.append(gridWrapper);
      document.getElementById("gridWrapper").appendChild(cellGrid);
};