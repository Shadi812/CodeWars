// DESCRIPTION:
// Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// Pipes list is correct when each pipe after the first index is greater (+1) than the previous one, and that there is no duplicates.

// Task
// Given the a list of numbers, return a fixed list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

//solution:

function pipeFix(numbers) {
  // Find the minimum
  const minValue = Math.min(...numbers);
  //   find maximum values in the list
  const maxValue = Math.max(...numbers);

  // Create a new array to store the fixed pipes
  const fixedPipes = [];

  // Add the values incrementally from the minimum to the maximum

  for (let i = minValue; i <= maxValue; i++) {
    fixedPipes.push(i);
  }

  return fixedPipes;
}
