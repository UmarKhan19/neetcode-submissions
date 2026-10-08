class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      const anagramsMap: Map<string, string[]> = new Map()
    
      for (const str of strs) {
        const charCodeStr:string = convertToCharCodeStr(str)

        if (!anagramsMap.has(charCodeStr)) {
          anagramsMap.set(charCodeStr, [])
        }

        anagramsMap.get(charCodeStr).push(str)
      }

      const groupAnagramsArr: string[][] = []

      for (const [_, anagrams] of anagramsMap) {
        groupAnagramsArr.push(anagrams)
      }

      return groupAnagramsArr
    }

    
}

function convertToCharCodeStr(str:string):string {
      const charCodeArr: number[] = new Array(26).fill(0);

      for (let i = 0; i <str.length; i++) {
        const alphabetIndex: number = str.charCodeAt(i) - "a".charCodeAt(0)
        charCodeArr[alphabetIndex]++
      }
      
      return charCodeArr.join(",")
    }
