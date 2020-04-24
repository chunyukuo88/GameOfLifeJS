export async function getFact(integer){
    let url = `http://numbersapi.com/${integer}/math`;
    const options = { method: "GET", headers: { "Content-type": "text/plain" }};
    
    let mathFact = await fetch(url, options)
        .then(res => res.text());
    console.log(mathFact);
    return mathFact;
};