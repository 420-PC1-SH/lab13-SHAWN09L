const greeting = require('./greeting');

describe("Greeting", function () {

    test("takes a string 'name' and returns 'Hello, {name}", function () {
        let result = greeting("Luke");
        expect(typeof result).toEqual("string");
    })

    test("greeting must return 'Hello there' if no parameter passed", function () {
        let result = greeting("");
        expect(result).toEqual("Hello there");
    })

    test("greeting must return 'Hello there' if undefined", function () {
        let result = greeting(undefined);
        expect(result).toEqual("Hello there");
    })

    test("greeting must return 'Hello there' if null", function () {
        let result = greeting(null);
        expect(result).toEqual("Hello there");
    })

    test("expect maj characters if parameter is in maj", function () {
        let result = greeting("HAN");
        expect(result).toEqual("HELLO, HAN");
    })
})

