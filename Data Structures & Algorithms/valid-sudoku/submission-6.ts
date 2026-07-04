class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const keyStore = new Set<string>();

        for (const [rowIndex, row] of board.entries()) {
            for (const [colIndex, colValue] of row.entries()) {
                if (colValue === ".") continue;

                const rowKey = `row-${rowIndex}-${colValue}`;
                const colKey = `col-${colIndex}-${colValue}`;
                const blockKey = `block-${Math.floor(rowIndex / 3)}-${Math.floor(colIndex / 3)}-${colValue}`;
                if (keyStore.has(rowKey) || keyStore.has(colKey) || keyStore.has(blockKey)) {
                    return false;
                }
                keyStore.add(rowKey);
                keyStore.add(colKey);
                keyStore.add(blockKey);
            }
        }

        return true;
    }
}
