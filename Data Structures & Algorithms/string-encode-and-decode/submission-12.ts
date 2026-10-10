class Solution {
  SEPARATOR: string = "#";

  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    const encodedStrArr: string[] = [];

    for (const str of strs) {
      encodedStrArr.push(`${str.length}${this.SEPARATOR}${str}`);
    }

    return encodedStrArr.join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    const decoded: string[] = [];
    let cursor = 0;

    while (cursor < str.length) {
      const separatorIndex = str.indexOf(this.SEPARATOR, cursor);

      if (separatorIndex === -1) {
        throw new Error("Invalid encoded string: separator missing");
      }

      const lengthText = str.slice(cursor, separatorIndex);

      if (!/^\d+$/.test(lengthText)) {
        throw new Error("Invalid encoded string: invalid length");
      }

      const length = Number(lengthText);
      const start = separatorIndex + 1;
      const end = start + length;

      if (end > str.length) {
        throw new Error("Invalid encoded string: payload is too short");
      }

      decoded.push(str.slice(start, end));
      cursor = end;
    }

    return decoded;
  }
}
