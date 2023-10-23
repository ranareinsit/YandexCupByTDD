// import { describe, expect, test } from "bun:test";
// import findLatestWeight from "./index.js";

// /*
// Находим 2 самых тяжёлых молекулы.
// Одну из них превращаем в антиматерию.
// Объединяем их. 
// При этом, если вес одинаковый, они аннигилируются. 
// Если же вес различается, то мы получаем новую молекулу, вес которой равен разнице весов предыдущих двух. 
// Сама получившаяся молекула является материей.
// Если осталась одна молекула — нужно выяснить её вес. 
// Если же молекул много — возвращаемся к пункту 1.
// */

// function findLatestWeight_reference(weights) {
//   const maximumTwo = (arr) => {
//     let max1 = arr[0];
//     let max2 = arr[1];
//     let max1I = 0;
//     let max2I = 1;
//     for (let i = 2; i < arr.length; i++) {
//       if (arr[i] > max1) {
//         if (max1 > max2) {
//           max2 = arr[i];
//           max2I = i;
//         } else {
//           max1 = arr[i];
//           max1I = i;
//         }
//       } else if (arr[i] > max2) {
//         max2 = arr[i];
//         max2I = i;
//       }
//     }

//     if (max1 > max2) return [max2, max1, max2I, max1I];
//     return [max1, max2, max1I, max2I];
//   };

//   if (weights.length <= 1) {
//     return weights[0];
//   }

//   do {
//     const [x, y, xI, yI] = maximumTwo(weights);
//     if (x === 0) {
//       return y;
//     }

//     weights[xI] = 0;
//     weights[yI] = y - x;

//   } while (true);
// };

// describe('findLatestWeight function', () => {
//   let stub = new Array(100_000).fill(0).map(() => Math.round(Math.random() * 10_000))
//   let resultA = null
//   let resultB = null
//   // 
//   test('a/b edge case 1', () => {
//     let stub = [0]
//     let result = findLatestWeight(stub)
//     expect(result).toBe(findLatestWeight_reference(stub))
//   })
//   test('edge case 1', () => {
//     let stub = [0]
//     let result = findLatestWeight(stub)
//     let expectation = 0
//     expect(result).toBe(expectation)
//   })
//   test('edge case 2', () => {
//     let stub = [0, 1]
//     let result = findLatestWeight(stub)
//     let expectation = 1
//     expect(result).toBe(expectation)
//   })
//   test('a/b edge case 2', () => {
//     let stub = [0, 1]
//     let result = findLatestWeight(stub)
//     expect(result).toBe(findLatestWeight_reference(stub))
//   })
//   test('a/b edge case 3', () => {
//     let stub = []
//     let result = findLatestWeight(stub)
//     expect(result).toBe(findLatestWeight_reference(stub))
//   })
//   test('edge case 3', () => {
//     let stub = []
//     let result = findLatestWeight(stub)
//     let expectation = undefined
//     expect(result).toBe(expectation)
//   })

//   test('a/b should find two most heaviest element, and substract most_max from least_max', () => {
//     let stub = [0, 1, 2] // most max = 2, least max = 1.
//     let result = findLatestWeight(stub)
//     expect(result).toBe(findLatestWeight_reference(stub))
//   })
//   test('should find two most heaviest element, and substract most_max from least_max', () => {
//     let stub = [0, 1, 2] // most max = 2, least max = 1.
//     let result = findLatestWeight(stub)
//     let expectation = 1 // 2-1 => 1-0 => 1
//     expect(result).toBe(expectation)
//   })

//   test('a/b continuous annihilation', () => {
//     let stub = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // 9-8 = 1, 7-6 = 1, 5-4 = 1, 3-2 = 1, and we have [0, 1, 1, 1, 1, 1] 
//     let result = findLatestWeight(stub)
//     expect(result).toBe(findLatestWeight_reference(stub))
//   })

//   test('continuous annihilation', () => {
//     let stub = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] // 9-8 = 1, 7-6 = 1, 5-4 = 1, 3-2 = 1, and we have [0, 1, 1, 1, 1, 1] 
//     let result = findLatestWeight(stub)
//     let expectation = 1 // odd, reduced size of array consisted of ones.
//     expect(result).toBe(expectation)
//   })

//   test('measure time at unsorted A test with template function', () => {
//     resultA = findLatestWeight_reference(stub)
//     expect(resultA)
//   })

//   test('measure time at unsorted B test with main function', () => {
//     resultB = findLatestWeight(stub)
//     expect(resultB)
//   })

//   test('unsorted, a/b testing', () => {
//     expect(resultA).toStrictEqual(resultB)
//   })

// })
