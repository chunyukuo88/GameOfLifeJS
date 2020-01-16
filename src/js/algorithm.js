module.exports = {

    deadOrAlive(){

    },

    evaluateDish(array){
        for (let index = 0; index < 8; index++) {
            let element = array[index];
            let neighbors = 0;
            if (array[index-1] === 1)
                neighbors++;
            if (array[index+1] === 1)
                neighbors++;

            if (neighbors === 2) {
                element = 1;
                console.log("Cell alive!")
            } else {
                console.log("Cell dead!")
                element = 0;
            }
        }

        return array;
    }

}