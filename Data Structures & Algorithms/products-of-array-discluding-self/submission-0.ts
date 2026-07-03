class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const resultArr:number[] = new Array(nums.length)
        
        for (let i = 0; i < nums.length; i++) {
            let product = 1
            for (let j =0; j < nums.length; j++) {
                if (i===j) continue;
                product *= nums[j]
            }
            resultArr[i] = product;
        }

        return resultArr
    }
}
