class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums: number[]): number[] {
    const productExceptSelfArr: number[] = new Array(nums.length).fill(1);

    let prefixProduct: number = 1;
    for (let idx = 0; idx < nums.length; idx++) {
      productExceptSelfArr[idx] = prefixProduct;
      prefixProduct *= nums[idx]
    }

    let postfixProduct: number = 1;
    for (let idx = nums.length - 1; idx >= 0; idx--) {
      productExceptSelfArr[idx] *= postfixProduct
      postfixProduct *= nums[idx] 
    }

    return productExceptSelfArr;
  }
}
