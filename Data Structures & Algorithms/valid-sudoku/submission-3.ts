class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const set = new Set<string>();
        for (let row = 0; row < board.length; row++) {
            for (let col = 0; col < board[row].length; col++) {
                const num = board[row][col];
                if ((parseInt(num) < 1 || parseInt(num) > 9) && num !== ".") return false;
                if (
                    set.has(`row-${row}-${num}`) ||
                    set.has(`col-${col}-${num}`) ||
                    set.has(`${Math.floor(row / 3)}-${Math.floor(col / 3)}-${num}`)
                ) {
                    if (num === ".") continue;
                    return false;
                }
                set.add(`row-${row}-${num}`);
                set.add(`col-${col}-${num}`);
                set.add(`${Math.floor(row / 3)}-${Math.floor(col / 3)}-${num}`);
            }
        }

        return true;
    }
}
