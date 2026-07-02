class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
  // initialize an empty array with size of the input array + 1.
  // initialize an empty map to store the elements and their frequencies.
  // run a loop to fill the map with elements and their frequencies.
  // run a loop over the map and put the keys of the map in the array at the index same as the frequecy of that element.
  // remove the indices from the back of the array that does not have any elements
  // return the k number of elements from the array.

  const frequencyArr: number[][] = new Array(nums.length + 1).fill(null).map(() => []);
  const frequencyMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === undefined) continue;
    if (!frequencyMap.has(num)) {
      frequencyMap.set(num, 0);
    }
    frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
  }

  frequencyMap.forEach((value, key) => {
    frequencyArr[value]?.push(key);
  });

  const result: number[] = [];
  for (let i = frequencyArr.length - 1; i >= 0; i--) {
    if (frequencyArr[i]!.length === 0) continue;
    result.push(...frequencyArr[i]!);
    if (result.length === k) break;
  }

  return result;
    }
}
