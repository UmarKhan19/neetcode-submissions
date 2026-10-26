class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices: number[]): number {
    let maxProfit: number = 0;
    let left = 0,
      right = left + 1;

    while (right < prices.length) {
      while (prices[right] < prices[left]) {
        left = right;
        right++;
      }

      if (right > prices.length - 1) break;

      const profit: number = prices[right] - prices[left];

      maxProfit = Math.max(profit, maxProfit);

      right++;
    }

    return maxProfit;
  }
}
