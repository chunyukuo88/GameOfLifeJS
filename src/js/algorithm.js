//This module is used in panel.js

module.exports = {

    evaluateDish(generalArray){
        result = generalArray;
        for (let index = 0; index < 8; index++) {
            let neighbors = 0;
            if (result[index-1] === 1){neighbors++;}
            if (result[index+1] === 1){neighbors++;}
                // Refactor this as ternary operator only after the visualization
                // update works:
            if (neighbors > 1) {
                result[index] = 1;
            } else {
                result[index] = 0;
            }
        }

        for (let index = 0; index < result.length; index++) {
            console.log(result[index]);
        }

        return result;
    }

}