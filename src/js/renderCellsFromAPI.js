
module.exports = {
    
    async updateBasedOnAPI(generalArray, dishIdNumber) {

        const url = "http://localhost:8080/petri-dishes";
        const options = { method: "GET", 
                          headers: { "Content-type": "application/JSON" } 
                        };

        await fetch(url, options)
            .then(res => res.json())
            .then(json => {
                //The problem is here. The next line prints just fine 
                //but the problem is when I pass it as a variable.
                const apiArray = json[dishIdNumber].inputArray;
                let inputIndex = 0;
                for (let i = 0 ; i < 8; i++) {
                    for (let j = 0; j < 8; j++, inputIndex++) {
                        generalArray[inputIndex] = apiArray[i][j] === '@' ? 1 : 0;
                        }
                    }        
                }
            )

            console.log("Array with API data: " + generalArray)
            // .catch("Fetch failed");
            return generalArray;
    }

}