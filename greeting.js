function greet(name) {
    if (name == null || name == undefined || name == "") {
        return "Hello there"
    }
    if (name == name.toUpperCase()) {
        return "HELLO, " + String(name);
    }
    return "Hello, " + String(name);;
}

module.exports = greet;