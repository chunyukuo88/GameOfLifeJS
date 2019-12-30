

describe("Filter function", ()=> {

    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" }
        ];

        const output = [{ id: 3, url: "https://www.link3.dev" }];
        const output2= [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" },];
        const output3 = "Search term cannot be empty";

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
        expect(filterByTerm(input,  "uRL")).toEqual(output2);
        expect(filterByTerm(input, "")).toEqual(output3);
    })

})

function filterByTerm(inputArr, searchTerm) {
    if (searchTerm == "") {
        return "Search term cannot be empty";
    }
    else {
        return inputArr.filter(function(arrayElement) {
            return arrayElement.url.match(searchTerm.toLowerCase());
        });
    }
}