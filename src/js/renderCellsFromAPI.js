
module.exports = {
    
    async updateBasedOnAPI(cellArray) {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };

        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                let propellors = json[1].inputArray;
                let inputIndex = 0;
                for (let i = 0 ; i < propellors.length; i++) {
                    for (let j = 0; j < propellors[0].length; j++, inputIndex++) {
                        cellArray[inputIndex] = propellors[i][j] === '@' ? 1 : 0;
                        }
                    }        
                }
            )
            console.log("Array with API data: " + cellArray)
            // .catch("Fetch failed");
            return cellArray;
    }

}