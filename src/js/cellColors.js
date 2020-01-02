module.exports = {   

    makeCellsColorChangeable(cell){
        
        cell.addEventListener("mousedown", ()=> {
            if (cell.style.backgroundColor === 'white') {
                cell.style.backgroundColor = 'orange';   
              }
              else cell.style.backgroundColor = 'white';
            // cell.style.backgroundColor === 'white' ? 'orange' : 'white';
        })
    },

    apiColors(cell){
        if (cell.innerText === '@') {
            cell.innerText = "";
            cell.style.backgroundColor = 'orange';
        }
        if (cell.innerText === '.') {
            cell.innerText = "";
        }
    }




}