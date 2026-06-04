class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const numsSet = new Set<number>(nums);
        if(numsSet.size === nums.length) return false;
        return true;
    }
}
