const greeting = require('./greeting');

describe("Greeting", function () {

    test("takes a string 'name' and returns 'Hello, {name}", function () {
        let result = greeting("Luke");
        expect(typeof result).toEqual("String");
    })
})