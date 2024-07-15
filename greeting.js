function greet(name) {
    if (name == null || name == undefined || name == "") {
        return "Hello there"
    }
    let text = "Hello, " + String(name);
    return text;
}

module.exports = greet;