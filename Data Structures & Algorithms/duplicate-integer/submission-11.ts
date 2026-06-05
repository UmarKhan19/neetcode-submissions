class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(arr: number[]): boolean {
        return new Set(arr).size !== arr.length;
    }
}
