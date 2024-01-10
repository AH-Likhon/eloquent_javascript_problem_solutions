// QUestions:: A non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

// Write a function:

// function solution(A);

// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.

// Given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].

// Solution::

function solution(A) {
  const set = new Set();
  const N = A.length;

  for (let i = 0; i < N; i++) {
    // Check if the element is within the valid range and not a duplicate
    if (A[i] > N || set.has(A[i])) {
      return 0;
    }
    set.add(A[i]);
  }

  // Verify if all elements from 1 to N are present
  for (let i = 1; i <= N; i++) {
    if (!set.has(i)) {
      return 0;
    }
  }

  return 1;
}

console.log(solution([4, 1, 3, 2]));
// console.log(solution([4, 1, 2]));
