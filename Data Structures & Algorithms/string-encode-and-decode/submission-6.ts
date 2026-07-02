class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        const result: string[] = [];

        for (const str of strs) {
            result.push(str.length + "#" + str);
        }

        return result.join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const resultArr: string[] = [];

        let curr = 0;
        let i: number = 0;

        while (i < str.length) {
            if (str[i] === "#") {
                const numOfChar = Number(str.substring(curr, i));
                resultArr.push(str.substring(i + 1, i + 1 + numOfChar));
                curr = i + 1 + numOfChar;
                i = 1 + i + numOfChar;
            }
            i++
        }

        return resultArr;
    }
}
