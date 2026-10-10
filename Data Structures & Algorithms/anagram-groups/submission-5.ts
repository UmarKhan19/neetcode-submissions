class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs: string[]): string[][] {
    const groupAnagramsMap: Map<string, string[]> = new Map();
    const groupAnagramArr: string[][] = [];

    for (const str of strs) {
      const strCharCode: string = this.convertStringToCharCode(str);

      if (!groupAnagramsMap.has(strCharCode)) {
        groupAnagramsMap.set(strCharCode, []);
      }

      groupAnagramsMap.get(strCharCode).push(str);
    }

    for (const [_, anagrams] of groupAnagramsMap) {
      groupAnagramArr.push(anagrams);
    }

    return groupAnagramArr;
  }

  private convertStringToCharCode(str: string): string {
    const charCodeArr: number[] = new Array(26).fill(0);

    for (const char of str) {
      const charCode: number = char.charCodeAt(0) - "a".charCodeAt(0);
      charCodeArr[charCode] += 1;
    }

    return charCodeArr.join(",");
  }
}
