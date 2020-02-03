module.exports = {

    renderWithRandomCells(generalArray){
        
        for (let index = 0; index < generalArray.length; index++) {
            generalArray[index] += Math.round(Math.random());        
        }

        return generalArray;
    }

}