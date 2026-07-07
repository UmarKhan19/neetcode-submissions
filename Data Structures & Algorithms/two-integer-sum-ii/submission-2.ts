class Solution {
  /**
   * @param {number[]} numbers
   * @param {number} target
   * @return {number[]}
   */
  twoSum(numbers: number[], target: number): number[] {
    let leftPointer: number = 0;
    let rightPointer: number = numbers.length - 1;

    while (leftPointer < rightPointer) {
      if (numbers[leftPointer] + numbers[rightPointer] > target) {
        rightPointer--;
      }

      if (numbers[leftPointer] + numbers[rightPointer] < target) {
        leftPointer++;
      }

      if (numbers[leftPointer] + numbers[rightPointer] === target) {
        return [leftPointer + 1, rightPointer + 1];
      }
    }
  }
}
