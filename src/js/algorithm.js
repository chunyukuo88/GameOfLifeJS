//This module is used in panel.js

module.exports = {

    evaluateDish(generalArray){
        generalArray;
        for (let index = 0; index < 8; index++) {
            let neighbors = 0;
            if (generalArray[index-1] === 1){neighbors++;}
            if (generalArray[index+1] === 1){neighbors++;}
                
            if (neighbors === 1)
                generalArray[index] = 1;
            else
                generalArray[index] = 0;
            
            console.log(neighbors);
        }

        for (let index = 0; index < 8; index++) {
            console.log(generalArray[index]);
        }

        return generalArray;
    }

}