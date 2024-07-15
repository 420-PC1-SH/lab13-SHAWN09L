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

    test("expect result to be 'Hello, {name[0]} and {name[1]}' if parameter is an array of 2", function () {
        const names = ["Jango", "Boba"];
        let result = greeting(names);
        expect(result).toEqual("Hello, Jango and Boba");
    })

    test("expect result to be 'Hello, {name[0]}, {name[1]} and {name[2]}' if parameter is an array of 3", function () {
        const names = ["Jill", "Jane", "Leia"];
        let result = greeting(names);
        expect(result).toEqual("Hello, Jill, Jane and Leia");
    })
})

