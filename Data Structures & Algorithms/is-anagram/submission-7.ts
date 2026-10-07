class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charMap: Map<string, number> = new Map();

    for (let i = 0; i < s.length; i++) {
      charMap.set(s[i], (charMap.get(s[i]) ?? 0) + 1);

      charMap.set(t[i], (charMap.get(t[i]) ?? 0) - 1);
    }
    for (const [_, value] of charMap) {
      if (value !== 0) return false;
    }

    return true;
  }
}
