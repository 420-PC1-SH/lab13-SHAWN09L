const processor = require('./processor.js');

describe("transmission processor", function () {

    test("takes a string and returns an object", function () {
        let result = processor("9701::<489584872710>");
        expect(typeof result).toEqual("object");
    });

    test("throws error if '::' not found", function () {
        const expectedError = new Error('Data is invalid ; should contain "::"');
        expect(() => { processor("9701<489584872710>"); }).toThrow(expectedError);
    });

    test("returns id in object", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).not.toEqual(undefined);
    });

    test("converts id to a number", function () {
        let result = processor("9701::<489584872710>");
        expect(result.id).toEqual(9701);
    });

    test("returns rawData in object", function () {
        let result = processor("9701::<487297403495720912>");
        expect(result.rawData).not.toEqual(undefined);
    });

    //labo-13
    //exercice 1 - requis 1
    test("throws error if 'rawdata' does not start and end with '<' & '>'", function () {
        const expectedError = new Error('Data is invalid, should contain "<" & ">"')
        expect(() => { processor("1410::932829840830053761"); }).toThrow(expectedError);
    })

    test("throws error if 'rawdata' does not start with '<'", function () {
        const expectedError = new Error('Data is invalid, should contain "<" & ">"')
        expect(() => { processor("1410::932829840830053761>"); }).toThrow(expectedError);
    })

    test("throws error if 'rawdata' does not end with '>'", function () {
        const expectedError = new Error('Data is invalid, should contain "<" & ">"')
        expect(() => { processor("1410::<932829840830053761"); }).toThrow(expectedError);
    })
    
    //exercice 1 - requis 2
    test("throws error if 'id' cannot be converted in type number", function () {
        const expectedError = new Error('Data is invalid, "id" must be of type number');
        expect(() => { processor("bobb::<932829840830053761>"); }).toThrow(expectedError);
    })

    //exercice 1 - requis 3
    test("throws error if 'rawdata' is not numbers", function () {
        const expectedError = new Error('Data is invalid, "rawdata" must be numbers');
        expect(() => { processor("1410::<bogGratton>"); }).toThrow(expectedError);
    })
});