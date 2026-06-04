class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const totalNumbers = nums.length;
        const seenNumbers = new Set<number>();
        
        for (let i = 0; i < totalNumbers; i++) {
            const currentNum = nums[i];
            
            if (seenNumbers.has(currentNum)) {
                return true;
            }
            
            seenNumbers.add(currentNum);
        }
        
        return false;
    }
}
