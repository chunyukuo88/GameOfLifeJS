//This module is used in panel.js

module.exports = {

    evaluateDish(generalArray){
        
        neighborsArray = this.countNeighbors(generalArray);

        for (let i = 0; i < generalArray.length; i++) {
            if (generalArray[i] == 1 && neighborsArray[i] == 2)
                generalArray[i] = 1;
            else if (generalArray[i] == 1 && neighborsArray[i] < 2)
                generalArray[i] = 0;
            else if (neighborsArray[i] == 3)
                generalArray[i] = 1;
            else if (neighborsArray[i] > 3)
                generalArray[i] = 0;
            else
                generalArray[i] = 0;
        }

        return generalArray;
    },

    countNeighbors(array){
        let result = [];

        for (let index = 0; index < array.length; index++) {
            let neighbors = 0;
            //Neighbors from previous row
            if (array[index-17] == 1){neighbors++;}
            if (array[index-16] == 1){neighbors++;}
            if (array[index-15] == 1){neighbors++;}
            //Neighbors from same row
            if (array[index-1] == 1){neighbors++;}
            if (array[index+1] == 1){neighbors++;}
            //Neighbors from following row
            if (array[index+15] == 1){neighbors++;}
            if (array[index+16] == 1){neighbors++;}
            if (array[index+17] == 1){neighbors++;}

            result.push(neighbors);
        }

        return result;
    }

}