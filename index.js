function hasTargetSum(arr, target) {
  const numSet = new Set();
  for (let num of arr) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }
  return false;
}

module.exports = hasTargetSum; // Make sure to export the function
