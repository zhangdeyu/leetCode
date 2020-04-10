// n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
/* 
给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。

每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

示例:

输入: 4
输出: [
 [".Q..",  // 解法 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // 解法 2
  "Q...",
  "...Q",
  ".Q.."]
]
解释: 4 皇后问题存在两个不同的解法。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/n-queens
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  var chessBoard = [];

  function initChessBoard(n) {
    var chessBoard = [];
    for (var x = 0; x < n; x++) {
      chessBoard[x] = [];
      for (var y = 0; y < n; y++) {
        chessBoard[x][y] = '.';
      }
    }
    return chessBoard;
  }

  // 当前位置是否能够放置皇后
  // 需要检查的位置有 左对角线 右对角线 当前列
  function checkPositon(x, y) {
    for (let i = 0; i < y; i ++) {
      if (chessBoard[x][i] === 'Q') {
        return false;
      }

      if (x - 1 - i >= 0 && chessBoard[x-1-i][y-1-i] === 'Q') {
        return false;
      }

      if (x + 1 + i < n && chessBoard[x + 1 + i][y -1 - i] === 'Q') {
        return false;
      }
    }

    return true;
  }

  function solve(y) {
    if (y === n) {
      return true;
    }
    for (let i = 0; i < n; i ++) {
      for (let x = 0; x < n; x ++) {
        chessBoard[x][y] = '.';
      }

      if (checkPositon(i, y)) {
        chessBoard[i][y] = 'Q';
        if (solve(y + 1)) {
          return true;
        }
      }
    }
    return false;
  }
  var res = []

  for (let y = 0; y < n; y ++) {
    chessBoard = initChessBoard(n);
    chessBoard[0][y] = 'Q';
    if (solve(1)) {
      res.push(chessBoard);
    }
  }
  return res;
};

console.log(solveNQueens(4))