//import fizzBuzz from './index';

const { TestScheduler } = require('jest');
const fizzBuzz = require('./index');

describe('fizzbuzz', () => {
  test('function is defined', () => {
    // Given
    expect(fizzBuzz).toBeDefined();
    // When

    // Expect
  });

  test('should return fizz when i give a multiple of 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(6)).toBe('fizz');
  });

  test('should return buzz when i give a multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
  });

  test('should return fizzbuzz when i give a multiple of 15', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
  });
});
