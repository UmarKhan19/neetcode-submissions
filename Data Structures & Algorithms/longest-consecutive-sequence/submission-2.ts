class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    const hasSeenNumSet: Set<number> = new Set(nums);

    let longestSequenceLength: number = 0
    for (const num of hasSeenNumSet) {
      if (hasSeenNumSet.has(num - 1)) continue
      
      let currentLongestSequenceLength: number = 1

      while (hasSeenNumSet.has(num + currentLongestSequenceLength)) {
        currentLongestSequenceLength++
      }

      if (longestSequenceLength < currentLongestSequenceLength) {
        longestSequenceLength = currentLongestSequenceLength
      }
    }

    return longestSequenceLength
  }
}
