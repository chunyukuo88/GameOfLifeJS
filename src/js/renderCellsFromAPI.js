
module.exports = {
    
    async updateBasedOnAPI(generalArray, dishIdNumber) {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };

        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                const apiArray = json[dishIdNumber].inputArray;
                let inputIndex = 0;
                for (let i = 0 ; i < 16; i++) {
                    for (let j = 0; j < 16; j++, inputIndex++) {
                        generalArray[inputIndex] = apiArray[i][j] === '@' ? 1 : 0;
                        }
                    }        
                }
            )
            .catch("Fetch failed");
            return generalArray;
    }

}