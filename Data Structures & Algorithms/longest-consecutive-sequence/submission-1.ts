class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {

    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    const sequenceSet = new Set(nums);

    let maxLength: number = 0;

    for (const num of sequenceSet) {
      if (sequenceSet.has(num - 1)) continue;

      let currSeqLen: number = 1;

      while (sequenceSet.has(num + currSeqLen)) {
        currSeqLen++;
      }

      if (currSeqLen > maxLength) maxLength = currSeqLen;
    }

    return maxLength;
  }
}
