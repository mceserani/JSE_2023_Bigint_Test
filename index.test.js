'use strict'

const factorial = require('./index.js');

describe('factorial', () => {

    test('should return 1 when n = 0', () => {
        expect(factorial(0)).toBe(1n);
    });
    
    test('should return 1 when n = 1', () => {
        expect(factorial(1)).toBe(1n);
    });
    
    test('should return 2 when n = 2', () => {
        expect(factorial(2)).toBe(2n);
    });
    
    test('should return 6 when n = 3', () => {
        expect(factorial(3)).toBe(6n);
    });
    
    test('should return 3628800 when n = 10', () => {
        expect(factorial(10)).toBe(3628800n);
    });
    
    test('should return 2432902008176640000 when n = 20', () => {
        expect(factorial(20)).toBe(2432902008176640000n);
    });
    
    test('should return "Il numero deve essere non negativo" when n = -1', () => {
        expect(factorial(-1)).toBe("Il numero deve essere non negativo");
    });
    
    test('should return "Il numero deve essere intero" when n = 1.5', () => {
        expect(factorial(1.5)).toBe("Il numero deve essere intero");
    });
    
});