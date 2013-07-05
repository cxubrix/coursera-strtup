#!/usr/bin/env node
console.log("Calculating first 100 prime numbers.\n")

var primes = [];

var findPrime = function(primes, check) {
    for (i = 0; i < primes.length; i++) {
	if (check % primes[i] == 0) {
	    return false;
	}
	if (primes[i] + 1 > check / 2) {
	    return true;
	}
    }
};

var fmt = function(arr) {
    return arr.join(",");
};


var lastCheck = 2;
primes.push(lastCheck);
// hack to check only odd numbers
lastCheck--;

while (primes.length < 100) {
    lastCheck++;
    lastCheck++;
    rez = findPrime(primes, lastCheck);
    if (rez) {
	primes.push(lastCheck);
    }
}

var fs = require('fs');
fs.writeFileSync('primes.txt', fmt(primes));
