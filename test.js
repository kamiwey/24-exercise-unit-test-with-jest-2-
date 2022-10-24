test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(1)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 1 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(1)).toBe(1.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test('1.2 Dollar debe ser igual a 127.9 japan yen', function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(1.2)
    const expected  = 1.2 * 127.9;
    expect(fromDollarToYen(1.2)).toBe(153.48);
})

test('153.48 Yan debe ser igual a 0.8 pounds', function () {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound(1)
    const expected = 153.48 * 0.8;
    expect(fromYenToPound(153.48)).toBe(123);
})