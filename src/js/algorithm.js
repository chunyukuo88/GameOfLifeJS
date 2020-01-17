//This module is used in panel.js

module.exports = {

    evaluateDish(generalArray){
        
        let neighborsArray = [];

        for (let index = 0; index < 8; index++) {
            let neighbors = 0;
            if (generalArray[index-1] == 1){neighbors++;}
            if (generalArray[index+1] == 1){neighbors++;}
            neighborsArray.push(neighbors);
        }

        console.log(neighborsArray);

        for (let index = 0; index < generalArray.length; index++) {
            
            if(generalArray[index] == 1 && neighborsArray[index] == 2){
                generalArray[index] = 1;
            }  else {
                generalArray[index] = 0;
            }
        }


        return generalArray;
    }

}