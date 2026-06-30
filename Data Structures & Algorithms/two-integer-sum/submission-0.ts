class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
          for (let i = 0; i <= nums.length; i++) {
    for (let j = 0; j <= nums.length; j++) {
      if (j === i) continue;
      const sum = nums[i]! + nums[j]!;
      if (sum === target) return [Math.min(i, j), Math.max(i, j)];
    }
  }
  throw Error("No two-sum solution exists")
    }
}
