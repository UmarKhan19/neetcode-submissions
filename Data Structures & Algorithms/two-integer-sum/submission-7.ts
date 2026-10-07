class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums: number[], target: number): number[] {
    const seenNums: Map<number, number> = new Map()

    for (let i = 0; i < nums.length; i++){
      const diff: number = target - nums[i]

      if (seenNums.has(diff)){
        return [i, seenNums.get(diff)]
      }

      seenNums.set(nums[i], i)
    }
  }
}
