

export default async function mathFact(integer){
    const url = `http://numbersapi.com/${integer}/math`;
    const result = await fetch(url).then(res => res.text());
    return result;
};
