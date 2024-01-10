// Question:: An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

// Your goal is to find that missing element.

// Write a function:

// function solution(A);

// that, given an array A, returns the value of the missing element.

// For example, given array A such that:

//   A[0] = 2
//   A[1] = 3
//   A[2] = 1
//   A[3] = 5
// the function should return 4, as it is the missing element.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [0..100,000];
// the elements of A are all distinct;
// each element of array A is an integer within the range [1..(N + 1)].

// Solution::

// function solution(A) {
//   const n = A.length + 1; // due to one element is missing
//   const sumOfN = (n * (n + 1)) / 2;
//   let sumOfA = 0;
//   for (let i of A) {
//     sumOfA += i;
//   }

//   const missingElement = sumOfN - sumOfA;
//   return missingElement;
// }

// Or

function solution(A) {
  const N = A.length;

  // Calculate the expected sum of consecutive numbers from 1 to N+1
  const expectedSum = ((N + 1) * (N + 2)) / 2;

  // Calculate the actual sum of the elements in array A
  const actualSum = A.reduce((sum, num) => sum + num, 0);

  // Find the missing element
  const missingElement = expectedSum - actualSum;

  return missingElement;
}

// Example usage:
console.log(solution([2, 3, 1, 5])); // Output will be 4
