class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: string): boolean {
    let rightPointer: number = s.length - 1;
    let leftPointer: number = 0;

    while (leftPointer < rightPointer) {
      while (leftPointer < rightPointer && !this.isAlphaNumeric(s[leftPointer])) {
        leftPointer++;
      }

      while (leftPointer < rightPointer && !this.isAlphaNumeric(s[rightPointer])) {
        rightPointer--;
      }

      if (s[leftPointer]?.toLowerCase() !== s[rightPointer]?.toLowerCase()) {
        return false;
      }

      rightPointer--;
      leftPointer++;
    }

    return true;
  }

  isAlphaNumeric(char: string | undefined): boolean {
    if (char === undefined) return false;

    const code = char.charCodeAt(0);

    return (code >= 48 && code <= 57) || (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
  }
}
