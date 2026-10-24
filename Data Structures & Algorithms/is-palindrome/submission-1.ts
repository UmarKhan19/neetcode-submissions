class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string): boolean {
    let leftPointer: number = 0,
      rightPointer: number = s.length - 1;

    while (leftPointer < rightPointer) {
      while (!this.isAlphanumeric(s[leftPointer])) {
        leftPointer++;
      }

      while (!this.isAlphanumeric(s[rightPointer])) {
        rightPointer--;
      }

      if (rightPointer > leftPointer) {
        if (s[leftPointer].toLowerCase() !== s[rightPointer].toLowerCase()) {
          return false;
        }
      }

      rightPointer--;
      leftPointer++
    }

    return true;
  }

  isAlphanumeric(str): boolean {
    return /^[a-zA-Z0-9]+$/.test(str);
  }
}
