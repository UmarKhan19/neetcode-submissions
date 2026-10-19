class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]): string[][] {
    const anagramMap: Map<string, string[]> = new Map();
    const anagramGroup: string[][] = [];

    for (const str of strs) {
      const key: string = this.generateKey(str);

      if (!anagramMap.has(key)) {
        anagramMap.set(key, []);
      }

      anagramMap.get(key).push(str);
    }

    for (const [_, anagrams] of anagramMap) {
      anagramGroup.push(anagrams);
    }

    return anagramGroup;
  }

  private generateKey(str: string): string {
    const keyArr: number[] = new Array(26).fill(0);

    for (const char of str) {
      const idx: number = Number(char.charCodeAt(0)) - Number("a".charCodeAt(0));

      keyArr[idx] += 1;
    }

    return keyArr.join(",");
  }
}
