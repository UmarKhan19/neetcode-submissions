class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    const frequencyMap: Map<number, number> = new Map();

    for (const num of nums) {
      frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
    }

    const bucketArr: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

    for (const [num, frequency] of frequencyMap) {
      bucketArr[frequency].push(num);
    }

    const topKArr: number[] = [];

    for (let i = bucketArr.length - 1; i >= 0; i--) {
      if (bucketArr[i].length > 0) {
        for (const num of bucketArr[i]) {
          topKArr.push(num);

          if (topKArr.length === k) return topKArr;
        }
      }
    }

    return topKArr;
  }
}
