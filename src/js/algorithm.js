//This module is used in panel.js

module.exports = {

    evaluateDish(generalArray){
        
        neighborsArray = this.countNeighbors(generalArray);

        for (let i = 0; i < generalArray.length; i++) {
            generalArray[i] = (generalArray[i] == 1 && neighborsArray[i] == 2) ? 1: 0;
        }

        return generalArray;
    },

    countNeighbors(array){
        let result = [];

        for (let index = 0; index < array.length; index++) {
            let neighbors = 0;
            //Neighbors from previous row
            if (array[index-9] == 1){neighbors++;}
            if (array[index-8] == 1){neighbors++;}
            if (array[index-7] == 1){neighbors++;}
            //Neighbors from same row
            if (array[index-1] == 1){neighbors++;}
            if (array[index+1] == 1){neighbors++;}
            //Neighbors from following row
            if (array[index+7] == 1){neighbors++;}
            if (array[index+8] == 1){neighbors++;}
            if (array[index+9] == 1){neighbors++;}

            result.push(neighbors);
        }

        return result;
    }

}