class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums: number[], k: number): number[] {
    // We recieve an array of integers, and a number as inputs.
    // - array of integers consists of integers ranging from -1000 to 1000.
    // - second input is a number which denotes to how many top integers we have to return in output.
    // We have to return an array of integers such that the integers have the highest frequency in the input array.

    // Algorithm:
    // initialize an empty Map to store the number and it's frequency.
    // Loop over the input array
    // - Check whether teh number is in the Map
    //  - if yes: increment the frequency by 1.
    //  - if no: add the number in the Map with value 1
    // - loop ends
    // initialize a 2D array of integers.
    // loop over the Map
    // - push the key of the map in the array where it's index is equal to the value of that key.
    // - loop ends
    // initialize an output array
    // loop ever the array from end to start
    // - skip the iteration if the array at that index is empty.
    // - loop over the array on that index.
    //   - push the number in the output array
    //   - check whether the length of the array equals `k`
    //     - if yes: reutrn output array
    //   - loop ends
    // - loop ends

    const freqMap: Map<number, number> = new Map();

    for (const num of nums) {
      freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
    }

    const bucketArr: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

    for (const [key, value] of freqMap) {
      bucketArr[value].push(key);
    }

    const outputArr: number[] = [];

    for (let i = bucketArr.length - 1; i >= 0; i--) {
      const group: number[] = bucketArr[i];
      if (group.length < 1) continue;

      for (const num of group) {
        outputArr.push(num);

        if (outputArr.length === k) return outputArr;
      }
    }
  }
}
