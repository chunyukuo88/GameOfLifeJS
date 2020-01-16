//This module is used in panel.js

module.exports = {

    evaluateDish(generalArray){
        
        let myMap = new Map()


        for (let index = 0; index < 8; index++) {
            let neighbors = 0;
            if (generalArray[index-1] === 1){neighbors++;}
            if (generalArray[index+1] === 1){neighbors++;}
                         
            console.log(neighbors);
        }



        return generalArray;
    }

}