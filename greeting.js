function greet(name) {
    if (name == null || name == undefined || name == "") {
        return "Hello there"
    }
    if (name.length == 2 && typeof name == "object") {
         return "Hello, " + String(name[0]) + " and " + String(name[1]);
    }
    if (name.length >= 3 && typeof name == "object") {
        let text = "Hello, " + name[0];
        for (let index = 1; index < name.length - 1; index++) {
            text = text +", " + String(name[index]);
        }
        return text + " and " + name[name.length - 1];
    }
    if (name == name.toUpperCase()) {
        return "HELLO, " + String(name);
    }
    
    return "Hello, " + String(name);;
}

module.exports = greet;