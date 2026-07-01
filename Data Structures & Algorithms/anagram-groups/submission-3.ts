class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
          const anagramsMap = new Map<string, string[]>();

  for (const str of strs) {
    // key (26 elements denoting the frequency of the characters in the string) => [1, 0, 0, 0, 0.....,0]

    //check whether the key exists in the anagramsMap, if yes push the string in the array value of the key
    // if not, add the key in the map and add the string in an array as the value to the key

    const key = new Array(26).fill(0);
    for (const c of str) {
      const charCode = c.charCodeAt(0) - 'a'.charCodeAt(0);
      key[charCode]++;
    }
    const keyStr = key.join(',');
    if (anagramsMap.has(keyStr)) {
      anagramsMap.get(keyStr)?.push(str);
    } else {
      anagramsMap.set(keyStr, [str]);
    }
  }

  const anagramGroups: string[][] = [];

  anagramsMap.forEach((value) => {
    anagramGroups.push(value);
  });

  return anagramGroups;
    }
}
