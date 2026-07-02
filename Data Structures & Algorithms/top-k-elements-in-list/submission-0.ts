class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
          const resultArr: number[][] = [];
  const frequencyMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;

    if (!frequencyMap.has(num)) {
      frequencyMap.set(num, 0);
    }
    frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
  }

  frequencyMap.forEach((value, key) => {
    resultArr.push([value, key]);
  });

  const sortedArr: number[] = resultArr
    .sort((a, b) => b[0]! - a[0]!)
    .slice(0, k)
    .map((item) => item[1]);

  return sortedArr;
    }
}
