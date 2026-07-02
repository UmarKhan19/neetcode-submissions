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

        let i: number = 0;

        while (i < str.length) {
            let j = i;

            while (str[j] !== "#") {
                j++;
            }

            const numOfChars: number = Number(str.substring(i, j));

            const startOfString: number = j + 1;
            const endOfString: number = startOfString + numOfChars;

            resultArr.push(str.substring(startOfString, endOfString));

            i = endOfString;
        }

        return resultArr;
    }
}
