class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    const lengthOfS = s.length;
    const lengthOfT = t.length;
    if (lengthOfS != lengthOfT) return false;

    const sortedS = [...s].sort().join();
    const sortedT = [...t].sort().join();

    if (sortedS === sortedT) return true;
    return false;
  }
}
