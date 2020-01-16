module.exports = {

    deadOrAlive(){

    },

    evaluateDish(generalArray){
        for (let index = 0; index < 8; index++) {
            let element = generalArray[index];
            let neighbors = 0;
            if (generalArray[index-1] === 1){neighbors++;}
            if (generalArray[index+1] === 1){neighbors++;}
                // Refactor this as ternary operator only after the visualization
                // update works.
            if (neighbors === 2) {
                element = 1;
                console.log("Cell alive!")
            } else {
                console.log("Cell dead!")
                element = 0;
            }
        }

        return generalArray;
    }

}