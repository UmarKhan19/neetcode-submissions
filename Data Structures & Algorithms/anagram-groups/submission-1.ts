class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const outputArr: string[][] = [];
        for (let i = 0; i < strs.length; i++) {
            const alreadyInArr = new Set<string>(outputArr.flat());

            if (alreadyInArr.has(strs[i])) continue;

            outputArr?.push([strs[i]!]);

            for (let y = i + 1; y < strs.length; y++) {
                const isAnagramResult: boolean = isAnagram(strs[i]!, strs[y]!);

                if (isAnagramResult) {
                    outputArr[outputArr.length - 1]?.push(strs[y]!);
                }
            }
        }

        console.log(outputArr);

        return outputArr;
    }
}

function isAnagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const strMap = new Map<string, number>();

    for (let i = 0; i <= str1.length - 1; i++) {
        strMap.set(str1[i], (strMap.get(str1[i]) ?? 0) + 1);
        strMap.set(str2[i], (strMap.get(str2[i]) ?? 0) - 1);
    }

    for (const value of strMap.values()) {
        if (value !== 0) return false;
    }

    return true;
}
