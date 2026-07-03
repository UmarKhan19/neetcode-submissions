class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const numOfElements: number = nums.length;
        const resultArr: number[] = new Array(numOfElements).fill(1)

        let prefix: number = 1;
        for (let i = 0; i < numOfElements; i++){
            resultArr[i] = prefix
            prefix *= nums[i]  

        }

        let postfix: number = 1;
        for (let i = numOfElements - 1; i >= 0; i--) {
            resultArr[i] *= postfix;
            postfix *= nums[i];                
        }

        return resultArr
    }
}
