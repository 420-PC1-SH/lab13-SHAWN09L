function greet(name) {
    if (name == null || name == undefined || name == "") {
        return "Hello there"
    }
    if (name.length == 2 && typeof name == "object") {
         return "Hello, " + String(name[0]) + " and " + String(name[1]);
    }
    if (name.length == 3 && typeof name == "object") {
        return "Hello, " + String(name[0]) + ", " + String(name[1]) + " and " + String(name[2]);
    }
    if (name == name.toUpperCase()) {
        return "HELLO, " + String(name);
    }
    
    return "Hello, " + String(name);;
}

module.exports = greet;