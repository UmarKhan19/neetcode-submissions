class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const productexceptSelfArr: number[] = new Array(nums.length).fill(1);

    let prefixProduct: number = 1;
    for (let idx = 0; idx < nums.length; idx++) {
      productexceptSelfArr[idx] = prefixProduct;
      prefixProduct *= nums[idx];
    }

    let postfixProduct: number = 1;
    for (let idx = nums.length - 1; idx >= 0; idx--) {
      productexceptSelfArr[idx] *= postfixProduct;
      postfixProduct *= nums[idx];
    }

    return productexceptSelfArr;
  }
}
