class Solution {
  SEPARATOR: string = "#";

  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    const encodedStrArr: string[] = [];
    for (const str of strs) {
      const numOfChars: number = str.length;
      encodedStrArr.push(numOfChars + this.SEPARATOR + str);
    }

    const encodedStr: string = encodedStrArr.join("");

    return encodedStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const decodedcStrArr: string[] = [];

    let i: number = 0;
    while (i < str.length) {
      let j = i;

      while (str[j] !== this.SEPARATOR) {
        j++
      }

      const lengthOfStr: number = Number(str.slice(i, j))

      const strEl:string = str.slice(j + 1, j + lengthOfStr + 1)

      decodedcStrArr.push(strEl)

      i = j + lengthOfStr + 1
    }

    return decodedcStrArr;
  }
}
