const calcWeighIndex = (height, weight) => { 
   
    if (height > weight && weight < 3 ) { 
        throw new Error("height must be first argument and weight - second");
    }

    if (height > 3) { 
       throw new Error("height must be in metr"); 
    }

    if (weight === undefined || height === undefined) { 
        throw new Error("height and weight required"); 
    }

    if (typeof height !== "number" || typeof weight!== "number") {
      throw new Error("height and weight must be number");
    }


    const result = weight / height ** 2;
    return Number(result.toFixed(2));
}

module.exports = calcWeighIndex;