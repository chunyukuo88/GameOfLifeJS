module.exports = {   

    updateColorAndArray(cell, element, generalArray){    
        
        cell.addEventListener("mousedown", ()=> {

            if (cell.style.backgroundColor === 'white'){
                cell.style.backgroundColor = 'chartreuse';  
                generalArray[cell.className.slice(10)] = 1;
            } else {
                cell.style.backgroundColor = 'white';
                generalArray[cell.className.slice(10)] = 0;
            }
            element = (element === 0) ? 1 : 0;

        })
    }



}