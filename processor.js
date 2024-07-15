function processor(transmission) {
    if (!transmission.includes("::")) {
        throw new Error('Data is invalid ; should contain "::"');
    }
    let parts = transmission.split("::");
    let rawData = parts[1];
    if (!rawData.includes('<' && '>') || !rawData.includes('<') || !rawData.includes('>')) {
        throw new Error('Data is invalid, should contain "<" & ">"')
    }
    if (!/\d/.test(rawData)) {
        throw new Error('Data is invalid, "rawdata" must be numbers');
    }
    if (parts[0] != Number(parts[0])) {
        throw new Error('Data is invalid, "id" must be of type number');
    }
    return {
        id: Number(parts[0]),
        rawData: rawData
    };
}

module.exports = processor;