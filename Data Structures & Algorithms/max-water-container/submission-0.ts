class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */
  maxArea(heights: number[]): number {
    let maxUnitOfWater: number = 0;
    let left: number = 0,
      right: number = heights.length - 1;

    while (left < right) {
      const area: number = Math.min(heights[left], heights[right]) * (right - left);

      if (area > maxUnitOfWater) {
        maxUnitOfWater = area;
      }

      if (heights[left] < heights[right]) {
        left++;
      } else {
        right--;
      }
    }

    return maxUnitOfWater;
  }
}
