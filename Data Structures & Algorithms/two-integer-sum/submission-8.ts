class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const hasSeen: Map<number, number> = new Map();

    for (let idx = 0; idx < nums.length; idx++) {
      const difference: number = target - nums[idx];

      if (hasSeen.has(difference)) {
        return [hasSeen.get(difference), idx];
      }

      hasSeen.set(nums[idx], idx);
    }
  }
}
