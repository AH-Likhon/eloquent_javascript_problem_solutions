function solution(N) {
  // Convert the number to its binary representation
  const binary = N.toString(2);

//   console.log("Binary representation::", binary);

  let maxGap = 0;
  let currentGap = 0;
  let counting = false;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      if (!counting) {
        counting = true;
      } else {
        maxGap = Math.max(maxGap, currentGap);
      }
      currentGap = 0;
    } else {
      if (counting) {
        currentGap++;
      }
    }
  }

  return maxGap;
}

// Test cases
console.log(solution(1041)); // Output: 5
console.log(solution(32)); // Output: 0
