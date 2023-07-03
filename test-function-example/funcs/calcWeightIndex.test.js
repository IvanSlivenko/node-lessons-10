/*
1. Given height in metr and weight in kg.
2. Return weight / (height * height), fixed to 2.
3. Throw error with corrent message if given invalid arguments.
4. 

// 1,9, 90=> 24.93
// 90, 1.9  => error 'height must be first argument and weight - second'
190,90   => error 'height must be in metr'
1.9 null => error 'weight is required second argument'
null,null=> error 'height and weight required'
"1.9","90" => error 'height and weight must be number'

*/

const calcWeighIndex = require("./calcWeightIndex");


describe("test calcWeighIndex function", () => {
    test("1.9, 90=> 24.93", () => {
        const result = calcWeighIndex(1.9, 90);
        expect(result).toBe(24.93);
    });

    test("90, 1.9  => error 'height must be first argument and weight - second'", () => {
        expect(() => {
            calcWeighIndex(90, 1.9);
           //toThrow - перевіряє чи в цій помилці правильний текст 
        }).toThrow("height must be first argument and weight - second");
    });

    test("190, 90   => error 'height must be in metr'", () => {
        expect(() => { calcWeighIndex(190, 90) }).toThrow("height must be in metr")
    });
    
    test(" => error 'height and weight required'", () => {
      expect(() => calcWeighIndex()).toThrow("height and weight required");
    });

    test("'1.9' , '90' => error 'height and weight must be number'", () => {
      expect(() => calcWeighIndex("1.9", "90")).toThrow(
        "height and weight must be number"
      );
    });
    
});

