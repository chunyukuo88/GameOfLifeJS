module.exports = {   



    updateColorAndArray(cell, element){    
        cell.addEventListener("mousedown", ()=> {
            if (cell.style.backgroundColor === 'white')
                cell.style.backgroundColor = 'orange';   
            else cell.style.backgroundColor = 'white';

            element = (element === 0) ? 1 : 0;

        })
    }



}