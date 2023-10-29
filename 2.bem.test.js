import { describe, expect, test } from "bun:test";
import solution from "./index.js";

/*
Правило для разделителей – произвольное количество символов (не буквы).
*/

function refference(str) {
    let [, mod, elem] = str.match(/[a-z]+(?:([^a-z]+)[a-z]+(?:\1)?[a-z]+)([^a-z]+)[a-z]+(?:\2)?[a-z]+/);
    const substringCount = (source, substr) =>
        (source.match(new RegExp('[a-z]' + substr + '[a-z]', 'g')) || []).length;
    if (substringCount(str, elem) === 2 &&
        substringCount(str, mod) === 1
    ) {
        [mod, elem] = [elem, mod];
    }
    return { mod, elem };
}

describe('solution must work', () => {
    test('first case', () => {
        let stub = 'block_mod__elem'
        let result = solution(stub)
        expect(result).toEqual({ mod: '_', elem: '__' })
    })
    test('second case', () => {
        let stub = 'block_mod_mod__elem'
        let result = solution(stub)
        expect(result).toEqual({ mod: '_', elem: '__' })
    })
    test('third case', () => {
        let stub = 'block__elem_mod_mod'
        let result = solution(stub)
        expect(result).toEqual({ mod: '_', elem: '__' })
    })

    test('first a/b case', () => {
        let stub = 'block_mod__elem'
        let result = solution(stub)
        let refference_result = refference(stub)
        expect(result).toEqual(refference_result)
    })
    test('second a/b case', () => {
        let stub = 'block_mod__elem'
        let result = solution(stub)
        let refference_result = refference(stub)
        expect(result).toEqual(refference_result)
    })
    test('third a/b case', () => {
        let stub = 'block_mod__elem'
        let result = solution(stub)
        let refference_result = refference(stub)
        expect(result).toEqual(refference_result)
    })
})
