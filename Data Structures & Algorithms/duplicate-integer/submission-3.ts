class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const arrayLength: number = nums.length;
        for (let i = 0; i < arrayLength; i++) {
            for (let y =0; y < arrayLength; y++){
                if (i===y) continue;
                if (nums[i]===nums[y]) return true;
            }
        }
        return false;
    }
}

