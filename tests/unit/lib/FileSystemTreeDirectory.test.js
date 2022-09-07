// import { describe, expect, test } from '@jest/globals';
let sum = (a, b) => a + b;

describe('this is 1st test', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(4);
    });
});
