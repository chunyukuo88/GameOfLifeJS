import { getFact } from '../mathFact';

describe('math.js', ()=>{
    describe('When given an integer, ', ()=> {
        test('It gets a fact from the Numbers API', async () => {
            let mathFact = await getFact(5);
            let result = mathFact.includes('5 is'); //Owing to the fact that there are multiple facts for this integer.
            expect(result).toBe(true);
        });
    });
});