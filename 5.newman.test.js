import { describe, expect, test } from "bun:test";
const { draw } = require('./5.newman.solution.js');  

describe('Draw Function', () => {
    test('should return an array of specified length', () => {
        const N = 5;
        const result = draw(N, 100, 100);
        expect(result.length).toBe(N);
    });

    test('should return arrays containing four coordinate pairs each', () => {
        const result = draw(1, 100, 100);
        expect(result[0].length).toBe(4);
        result[0].forEach(coordinatePair => {
            expect(coordinatePair.length).toBe(2);
        });
    });

    test('should return coordinates within specified range', () => {
        const xMax = 100;
        const yMax = 100;
        const result = draw(1, xMax, yMax);
        result[0].forEach(coordinatePair => {
            expect(coordinatePair[0]).toBeGreaterThanOrEqual(0);
            expect(coordinatePair[0]).toBeLessThan(xMax);
            expect(coordinatePair[1]).toBeGreaterThanOrEqual(0);
            expect(coordinatePair[1]).toBeLessThan(yMax);
        });
    });

    test('should return unique rectangles', () => {
        const N = 10;
        const result = draw(N, 100, 100);
        const uniqueResults = new Set(result.map(JSON.stringify));
        expect(uniqueResults.size).toBe(N);
    });
});
