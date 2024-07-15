function greet(name) {
    console.log(typeof name);
    if (name == null || name == undefined || name == "") {
        return "Hello there"
    }
    if (name.length == 2) {
         return "Hello, " + String(name[0]) + " and " + String(name[1]);
    }
    if (name == name.toUpperCase()) {
        return "HELLO, " + String(name);
    }
    return "Hello, " + String(name);;
}

module.exports = greet;