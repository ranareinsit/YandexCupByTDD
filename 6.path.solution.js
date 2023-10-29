function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

function uniquePathsFormula(m, n) {
    return factorial(m + n - 2) / (factorial(m - 1) * factorial(n - 1));
}

module.exports = uniquePathsFormula