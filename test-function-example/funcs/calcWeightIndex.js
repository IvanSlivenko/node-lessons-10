const calcWeighIndex = (height, weight) => { 
    if () { 
        
    }
    if (height > weight) { 
        throw new Error("height must be first argument and weight - second");
    }
    const result = weight / height ** 2;
    return Number(result.toFixed(2));
}

module.exports = calcWeighIndex;