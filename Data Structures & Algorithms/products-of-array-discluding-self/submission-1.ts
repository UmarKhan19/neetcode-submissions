class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const resultArr: number[] = new Array(nums.length);

        // store a counter of 0s
        // get the product of all non-0s
        // if the count of 0 is more than 1, return the array fulol of 0s
        // else, return the array full of 0s except for the index where there is 0
        // if there are no 0s, simply divide the product of all the elements with the element at index i.

        const countZero: number[] = [];
        let productOfElements: number = 1;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                countZero.push(i);
                continue;
            }

            productOfElements *= nums[i];
        }

        if (countZero.length > 1) {
            resultArr.fill(0);
            return resultArr;
        }

        if (countZero.length === 1) {
            resultArr.fill(0);
            resultArr[countZero[0]] = productOfElements;
            return resultArr;
        }

        for (let i = 0; i < nums.length; i++) {
            resultArr[i] = productOfElements / nums[i];
        }

        return resultArr;
    }
}
