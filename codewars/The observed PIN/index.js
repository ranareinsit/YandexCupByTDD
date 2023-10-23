const map = {
    0: [0, 8],
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9]
};

export default function getPINs(observed) {
    const observedDigits = observed.split('').map(e => map[e]);
    const results = [''];

    for (const digitSet of observedDigits) {
        const newResults = [];
        for (const digit of digitSet) {
            for (const result of results) {
                newResults.push(result + digit);
            }
        }
        results.length = 0; 
        results.push(...newResults);
    }
    return results.sort();
}
