class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: Map<number, number> = new Map();
    const topKFrequentArr: number[] = [];

    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
    }

    const bucketArr: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

    for (const [value, frequency] of frequencyMap) {
      bucketArr[frequency].push(value);
    }

    for (let i = bucketArr.length - 1; i >= 0; i--) {
      if (bucketArr[i].length > 0) {
        for (const num of bucketArr[i]) {
          topKFrequentArr.push(num);
          if (topKFrequentArr.length === k) {
            return topKFrequentArr;
          }
        }
      }
    }
  }
}
