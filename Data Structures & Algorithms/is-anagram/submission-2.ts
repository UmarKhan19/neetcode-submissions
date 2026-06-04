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

    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();

    for (let i = 0; i < lengthOfS; i++) {
      const charCountInS: number | undefined = sMap.get(s[i]);
      const charCountInT: number | undefined = tMap.get(t[i]);

      const sChar: string = s[i];
      const tChar: string = t[i];

      if (charCountInS) {
        sMap.set(sChar, charCountInS + 1);
      } else {
        sMap.set(sChar, 1);
      }

      if (charCountInT) {
        tMap.set(tChar, charCountInT + 1);
      } else {
        tMap.set(tChar, 1);
      }
    }

    for (const char of sMap.keys()) {
      if (sMap.get(char) === tMap.get(char)) continue;
      return false;
    }

    return true;
  }
}
