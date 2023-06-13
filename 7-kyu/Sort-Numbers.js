// DESCRIPTION:
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums) {
  if (!nums || nums.length === 0) return [];
  return nums.sort(function (a, b) {
    return a - b;
  });
}
