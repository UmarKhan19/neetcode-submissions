class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // to store the value and it's index
        const indexMap = new Map<number, number>()
    
        for (const [index, num] of nums.entries()){
            const difference: number = target - num;
            const diffIndex = indexMap.get(difference);

            if (diffIndex !== undefined) {
                return [diffIndex, index]
            }

            indexMap.set(num, index)
        }
    }
}
