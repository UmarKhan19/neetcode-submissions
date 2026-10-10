class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    const hasSeenSet: Set<number> = new Set(nums);
    let longestCosecutiveSequence: number = 0;

    for (const num of nums) {
      if (!hasSeenSet.has(num - 1)) {
        let currentLongestSequence: number = 1;

        while (hasSeenSet.has(currentLongestSequence + num)) {
          currentLongestSequence++;
        }

        if (currentLongestSequence > longestCosecutiveSequence) {
          longestCosecutiveSequence = currentLongestSequence;
        }
      }
    }

    return longestCosecutiveSequence;
  }
}
