class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let resultStr: string = "";

        for (let i = 0; i < strs.length; i++) {
            resultStr += strs[i]!.length + "#" + strs[i]!;
        }

        return resultStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const resultArr: string[] = [];

        // determine the length of the string by writing the number followed by the delimiter
        // Then write down the string till the number of indices before the delimiter. follow this in loop

        let curr = 0;
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "#") {
                const numOfChar = Number(str.substring(curr, i));
                resultArr.push(str.substring(i + 1, i + 1 + numOfChar));
                curr = i + 1 + Number(str.substring(curr, i));
                i = i + 1 + numOfChar;
            }
        }

        return resultArr;
    }
}
