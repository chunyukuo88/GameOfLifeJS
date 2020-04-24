export async function getFact(integer){
    let url = `http://numbersapi.com/${integer}/math`;
    const options = { method: "GET", headers: { "Content-type": "application/JSON" }};
    let mathFact; 
    fetch(url, options)
        .then(res => res.json())
        .then(data => {
            mathFact = data
        });
};