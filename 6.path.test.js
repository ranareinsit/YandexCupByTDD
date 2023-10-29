import { describe, expect, test } from "bun:test";
const uniquePathsFormula = require('./6.path.solution.js');

describe('uniquePathsFormula', () => {
    test('should return correct number of paths for 3x7 grid', () => {
        expect(uniquePathsFormula(3, 7)).toBe(28);
    });

    test('should return correct number of paths for 1x1 grid', () => {
        expect(uniquePathsFormula(1, 1)).toBe(1);
    });

    test('should return correct number of paths for 2x2 grid', () => {
        expect(uniquePathsFormula(2, 2)).toBe(2);
    });

    test('should return correct number of paths for 5x5 grid', () => {
        expect(uniquePathsFormula(5, 5)).toBe(70);
    });
});