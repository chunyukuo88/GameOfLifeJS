import { getFact } from '../mathFact';

describe('math.js', ()=>{
    describe('When given an integer, ', ()=> {
        test('It gets a fact from the Numbers API', async () => {
            let result = await getFact(5);
            const expectedResult = '5 is the number of Platonic solids.';
            expect(result).toEqual(expectedResult);
        });
    });
});