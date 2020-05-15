function MathFact(integer){
    const url = `http://numbersapi.com/${integer}/math`;
    return fetch(url).then(res => res.text());
};

export default MathFact;