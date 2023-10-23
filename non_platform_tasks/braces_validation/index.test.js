import { describe, expect, test } from "bun:test";
import solution from "./index.js";

describe('solution must work', () => {
    test('case 1', () => {
        let stub = '()'
        let result = solution(stub)
        expect(result).toEqual(true)
    })
    test('case 2', () => {
        let stub = '(){}[]'
        let result = solution(stub)
        expect(result).toEqual(true)
    })
    test('case 3', () => {
        let stub = '([{rrr}])'
        let result = solution(stub)
        expect(result).toEqual(true)
    })
    test('case 4', () => {
        let stub = '[(])'
        let result = solution(stub)
        expect(result).toEqual(false)
    })
    test('case 5', () => {
        let stub = '(}'
        let result = solution(stub)
        expect(result).toEqual(false)
    })
    test('case 6', () => {
        let stub = '[({eee})](]'
        let result = solution(stub)
        expect(result).toEqual(false)
    })
})