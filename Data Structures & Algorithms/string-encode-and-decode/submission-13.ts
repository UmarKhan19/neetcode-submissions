class Solution {
  SEPARATOR = "#";
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    const encodeArr: string[] = [];

    for (const str of strs) {
      encodeArr.push(`${str.length}${this.SEPARATOR}${str}`);
    }

    return encodeArr.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const decodedStrArr: string[] = [];

    let idx = 0
    while (idx < str.length) {
        let endOfLengthIdx: number = idx;

        while(str[endOfLengthIdx] !== this.SEPARATOR) {
            endOfLengthIdx++
        }

        const lengthOfStr: number = Number(str.slice(idx, endOfLengthIdx))

        const startOfStr = endOfLengthIdx + 1;

        decodedStrArr.push(str.slice(startOfStr, lengthOfStr + startOfStr));

        idx = endOfLengthIdx + lengthOfStr + 1
    }

    return decodedStrArr;
  }
}
