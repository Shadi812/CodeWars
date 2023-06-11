// DESCRIPTION:
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

function removeEveryOther(arr) {
  // Create a new array with the first element from the input array
  const newArray = [arr[0]];
  // Iterate through the input array, starting from index 2 and incrementing by 2
  for (let i = 2; i < arr.length; i += 2) {
    // Add the element at the current index to the new array
    newArray.push(arr[i]);
  }
  // Return the new array

  return newArray;
}
