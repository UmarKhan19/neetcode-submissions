class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
          const anagramsMap = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const sortedStr = strs[i].split('').sort().join('');
    if (anagramsMap.has(sortedStr)) {
      anagramsMap.get(sortedStr)?.push(strs[i]);
    } else {
      anagramsMap.set(sortedStr, [strs[i]]);
    }
  }

  const anagramGroups: string[][] = [];

  anagramsMap.forEach((value) => {
    anagramGroups.push(value);
  });

  return anagramGroups;
    }
}
