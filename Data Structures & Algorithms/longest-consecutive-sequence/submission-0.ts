class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    const sequenceSet = new Set(nums);

    let maxLength: number = 0;

    for (const num of sequenceSet) {
      if (sequenceSet.has(num - 1)) continue;

      let currNum: number = num;
      let currSeqLen: number = 1;

      while (sequenceSet.has(currNum + 1)) {
        currNum++;
        currSeqLen++;
      }

      if (currSeqLen > maxLength) maxLength = currSeqLen;
    }

    return maxLength;
  }
}
