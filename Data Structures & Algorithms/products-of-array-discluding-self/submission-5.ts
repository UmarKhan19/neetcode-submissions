class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const productsOfArrayExceptSelf: number[] = [];

        let prefix = 1;
        for (const num of nums) {
            productsOfArrayExceptSelf.push(prefix);

            prefix *= num;
        }

        let postfix = 1;

        for (let idx = productsOfArrayExceptSelf.length - 1; idx >= 0; idx--) {
            productsOfArrayExceptSelf[idx] *= postfix

            postfix *= nums[idx]
        }

        return productsOfArrayExceptSelf;
    }
}
