class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let existingNumbers = new Set()

        for (const num of nums){
            if(existingNumbers.has(num)){
                return true;
            }

            existingNumbers.add(num)
        }
        return false;
    }
}
