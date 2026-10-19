class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    const hasSeen: Set<number> = new Set();

    for (const num of nums) {
      if (hasSeen.has(num)) {
        return true;
      }

      hasSeen.add(num);
    }

    return false;
  }
}
