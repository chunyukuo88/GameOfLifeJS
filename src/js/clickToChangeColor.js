module.exports = {   

    makeCellsColorChangeable(cell){
        
        cell.addEventListener("mousedown", ()=> {
            if (cell.style.backgroundColor === 'white') {
                cell.style.backgroundColor = 'orange';   
              }
              else cell.style.backgroundColor = 'white';
    })

    
    }
}