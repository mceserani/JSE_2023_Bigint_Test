'use strict'

// Funzione per calcolare il fattoriale di un numero intero non negativo
function factorial(n) {
    try{
        n = BigInt(n);
    } catch (e) {
        return "Il numero deve essere intero";
    }
    if (n == 0n) {
        return 1n;
    }
    if (n < 0n) {
        return "Il numero deve essere non negativo";
    }
    if (n % 1n != 0n) {
        return "Il numero deve essere intero";
    }
    if (n == 1n) {
        return 1n;
    }
    return n * factorial(n - 1n);
}

module.exports = factorial;