import mathFact from '../mathFact';

describe('mathFact.js', ()=> {
    describe('When given a valid integer, ', ()=>{
        test('it gets a math fact', async ()=>{
            const input = 0;
            const output = await mathFact(input);
            const expectedResult = '0 is the additive identity.';
            expect(output).toBe(expectedResult);
        });
    });
    describe('When given an invalid integer, ', ()=>{
        test('returns an error string', async ()=>{
            const input = 'chuck norris';
            const output = await mathFact(input);
            expect(output.includes('Cannot GET')).toBeTruthy();        });
    });
});