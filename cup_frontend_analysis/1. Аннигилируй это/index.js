/*
В качестве решения предоставьте файл, который экспортирует исправленный вариант функции findLatestWeight:

function findLatestWeight(weights) {  
  // ...  
}  
 
module.exports = findLatestWeight;
Решение будет запускаться в Nodejs 12.
*/

export default function findLatestWeight(weights) {
    // util
    function insertIntoSortedArray(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        arr.splice(low, 0, num);
        return arr;
    }
    // edge case
    if (weights.length <= 1) return weights[0];
    // 1. sort
    weights = weights.sort((a, b) => a - b)
    // 2. consume
    while (weights.length > 1) {
        let a = weights.pop()
        if (weights.length == 1) return a - weights[0]
        let b = weights.pop()
        if ((a - b) > 0) {
            //   3. produce
            insertIntoSortedArray(weights, a - b)
        }
    }
    // 4. return
    return weights[0]
}