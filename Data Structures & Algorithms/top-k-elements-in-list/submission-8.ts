class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    const freqMap: Map<number, number> = new Map();

    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
    }

    const bucketArr: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

    for (const [num, freq] of freqMap) {
      bucketArr[freq].push(num);
    }

    const topKFrequentElements: number[] = [];

    for (let idx = bucketArr.length - 1; idx >= 0; idx--) {
      if (bucketArr[idx].length > 0) {
        for (const num of bucketArr[idx]) {
          topKFrequentElements.push(num);

          if (topKFrequentElements.length === k) {
            return topKFrequentElements;
          }
        }
      }
    }
  }
}
