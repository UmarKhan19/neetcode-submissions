class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const prevMap = new Map<number, number>();

        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            const diffInMap = prevMap.get(difference);
            console.log(diffInMap);
            if (diffInMap !== undefined) {
                return [diffInMap, i];
            }
            prevMap.set(nums[i], i);
        }

        return [];
    }
}
