import MathFact from '../mathFact';

describe('MathFact.js', ()=> {
    describe('When given a valid integer, ', ()=>{
        test('gets a math fact', async ()=>{
            const input = 0;
            const output = await MathFact(input);
            const expectedResult = '0 is the additive identity.';
            expect(output).toBe(expectedResult);
        });
    });
});