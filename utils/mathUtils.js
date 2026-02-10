function generateFibonacci(n) {
    if (n < 0) throw new Error("Fibonacci input must be non-negative");
    if (n === 0) return [];
    if (n === 1) return [0];

    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    
    return fib;
}

function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

function filterPrimes(arr) {
    if (!Array.isArray(arr)) throw new Error("Prime input must be an array");
    return arr.filter(num => {
        if (typeof num !== 'number' || !Number.isInteger(num)) {
            throw new Error("All elements must be integers");
        }
        return isPrime(num);
    });
}

function calculateGCD(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function calculateHCF(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("HCF input must be a non-empty array");
    }

    for (let num of arr) {
        if (typeof num !== 'number' || !Number.isInteger(num) || num === 0) {
            throw new Error("All elements must be non-zero integers");
        }
    }

    return arr.reduce((hcf, num) => calculateGCD(hcf, num));
}

function calculateLCM(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        throw new Error("LCM input must be a non-empty array");
    }

    for (let num of arr) {
        if (typeof num !== 'number' || !Number.isInteger(num) || num === 0) {
            throw new Error("All elements must be non-zero integers");
        }
    }

    const gcd = (a, b) => calculateGCD(a, b);
    const lcm = (a, b) => Math.abs(a * b) / gcd(a, b);

    return arr.reduce((lcmVal, num) => lcm(lcmVal, num));
}

module.exports = {
    generateFibonacci,
    filterPrimes,
    calculateHCF,
    calculateLCM
};
