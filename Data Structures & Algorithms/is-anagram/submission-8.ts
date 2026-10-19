class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const charFreq: Map<string, number> = new Map();

    for (let idx = 0; idx < s.length; idx++) {
      charFreq.set(s[idx], (charFreq.get(s[idx]) ?? 0) + 1);

      charFreq.set(t[idx], (charFreq.get(t[idx]) ?? 0) - 1);
    }

    for (const [_, freq] of charFreq) {
      if (freq !== 0) return false;
    }

    return true;
  }
}
