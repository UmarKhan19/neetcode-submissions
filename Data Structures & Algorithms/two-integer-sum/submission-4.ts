class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numsMap = new Map(nums.map((num, i) => [num, i]));

        for (let i = 0; i <= nums.length; i++) {
            const difference = target - nums[i]!;

            const differenceIndex = numsMap.get(difference);
            if (differenceIndex && differenceIndex !== i) {
                return [Math.min(i, differenceIndex), Math.max(i, differenceIndex)];
            }
        }

        throw Error("No two-sum solution exists");
    }
}
