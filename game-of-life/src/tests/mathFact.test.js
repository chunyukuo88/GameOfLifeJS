import MathFact from '../mathFact';

describe('mathFact.js', ()=> {
    describe('When given a valid integer, ', ()=>{
        test('it gets a math fact', async ()=>{
            const output = await MathFact(0);
            const expectedResult = '0 is the additive identity.';
            expect(output).toBe(expectedResult);
        });
    });
    describe.skip('When given an invalid integer, ', ()=>{
        test('returns an error string', async ()=>{
            const output = await MathFact('chuck norris');
            expect(output.includes('Cannot GET')).toBeTruthy();        });
    });
});