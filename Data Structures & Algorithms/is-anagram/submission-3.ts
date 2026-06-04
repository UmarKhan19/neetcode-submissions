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

    const countMap = new Map<string, number>();

    for (let i = 0; i < lengthOfS; i++) {
      countMap.set(s[i], (countMap.get(s[i]) ?? 0) + 1);
      countMap.set(t[i], (countMap.get(t[i]) ?? 0) - 1);
    }

    for (const count of countMap.values()) {
      if (count === 0) continue;
      return false;
    }

    return true;
  }
}