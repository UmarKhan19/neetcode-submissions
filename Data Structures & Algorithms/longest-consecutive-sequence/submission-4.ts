class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums: number[]): number {
    let maxLength: number = 0;
    const doesExist: Set<number> = new Set(nums);

    for (const num of nums) {
      if (!doesExist.has(num - 1)) {
        let currentLength = 1;
        while (doesExist.has(currentLength + num)) {
          currentLength++;
        }

        if (currentLength > maxLength) maxLength = currentLength;
      }
    }

    return maxLength;
  }
}
