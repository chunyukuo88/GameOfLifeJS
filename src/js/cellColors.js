module.exports = {   



    updateColorAndArray(cell, element){    
        
        cell.addEventListener("mousedown", ()=> {
            if (cell.style.backgroundColor === 'white'){
                cell.style.backgroundColor = 'orange';  
                
            }
            else {
                cell.style.backgroundColor = 'white';
                
            }
            element = (element === 0) ? 1 : 0;
            

            let cellNumber = (cell.className.charAt(10));
            if (cell.className.length == 11){
                    console.log("Cell number: " + cellNumber);
            }  
            
            if (cell.className.length == 12) {
                cellNumber = cell.className.substring(10);
                    console.log("Cell number: " + cellNumber);
            }
        })
    }



}