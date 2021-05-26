const {lagrange,addOne,swapFirtsToLast} = require('./task');

describe('check swapFirtsToLast function', () => {

    test('should convert 123 to 321', () => {
        expect(swapFirtsToLast(123)).toBe(321)
    });

    test('should convert 12432143 to 32432141', () => {
        expect(swapFirtsToLast(12432143)).toBe(32432141)
    });

});

describe('check addOne function', () => {

    test('should convert 555 to 15551', () => {
        expect(addOne(555)).toBe(15551)
    });

    test('should convert 57 to 1571', () => {
        expect(addOne(57)).toBe(1571)
    });

});

describe('check lagrange function', () => {

    test('should for 50 return 1236', () => {
        expect(lagrange(50)).toBe("result 1236")
    });

    test('should for 68 return 1337', () => {
        expect(lagrange(68)).toBe("result 1337")
    });

});
