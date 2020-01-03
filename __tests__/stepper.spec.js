




let stepper = require("../src/js/stepper");

describe("Step function", ()=> {

    //Specifically testing the 
    test("It should calculate the number of neighbors cell 1 has.", () => {
        const input = document.getElementsByClassName("grid-item-1");

        const output = stepper.stepper(input);
        const expectedResult = 1;
        
        expect(output).toEqual(expectedResult);
    })

})