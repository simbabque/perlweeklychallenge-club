#!/usr/bin/env node

// See https://theweeklychallenge.org/blog/perl-weekly-challenge-164/#TASK1
//
// Task 1: Prime Palindrome
// Write a script to find all prime numbers less than 1000, which are also palindromes in base 10.
// Palindromic numbers are numbers whose digits are the same in reverse. For example, 313 is a palindromic
// prime, but 337 is not, even though 733 (337 reversed) is also prime.

// Convert to javascript and run with node:
// $ tsc challenge-164/julien-fiegehenn/typescript/ch-1.ts
// $ node challenge-164/julien-fiegehenn/typescript/ch-1.js

/**
 * Check if a number is prime.
 * Based on https://en.wikipedia.org/wiki/Primality_test#JavaScript
 * @param num - A number that might be a prime.
 * @returns True if the number is a prime, or false.
 */
function isPrime(num: number): boolean {
  if (num <= 1 || Number.isInteger(num) === false) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i: number = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * Check if a number is a palindrome.
 * @param num - A number that might be a palindrome.
 * @returns True if the number is a palindrome, or false.
 */
function isPalindrome(num: number): boolean {
  const original: number = num;
  let reversed: number = 0;
  while (num != 0) {
    const last_digit: number = num % 10;
    reversed = reversed * 10 + last_digit;
    num = Math.floor(num / 10);
  }
  return reversed === original;
}

for (let i: number = 1; i < 1000; i++) {
  if (isPrime(i) && isPalindrome(i)) {
    console.log(i);
  }
}

// Tests:
// console.log('isPalindrome(313): %s', isPalindrome(313));
// console.log('isPalindrome(337): %s', isPalindrome(337));
// console.log('isPrime(5): %s', isPrime(5));
// console.log('isPrime(6): %s', isPrime(6));
