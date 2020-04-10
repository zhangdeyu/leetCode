// 八皇后问题求解
/* 
采用回溯法进行处理，本质上是一种枚举方法
从棋盘的第一行开始尝试摆放第一个
摆放成功后递归一层 遵循规则在棋盘的第二行来摆放第二个皇后
依次类推
如果第三行无法摆放，则回溯到第二行 第二行的皇后摆放位置向右移动一格
 */

const chessBoard = [];
for (let i = 0; i < 8; i++) {
  chessBoard[i] = [];
  for (let j = 0; j < 8; j++) {
    chessBoard[i][j] = 0;
  }
}

// 判定八皇后是否合规 通过纵向和斜向判断是否存在其他皇后来判断是否合规
function check(x, y) {
  for (let i = 0; i < y; i ++) {
    // 检查纵向
    if (chessBoard[x][i] === 1) {
      return false;
    }

    // 检查左侧斜向
    if (x - 1 - i >= 0 && chessBoard[x -1 - i][y - 1- i] === 1) {
      return false;
    }
    // 检查右侧斜向
    if (x + 1 + i < 8 && chessBoard[x + 1 + i][y - 1 - i] === 1) {
      return false;
    }
  }
  return true;
}

function settleQueen(y) {
  if (y === 8) {
    return true;
  }

  for (let i = 0; i < 8; i ++) {
    // 当前行清零 以免在回溯的时候出现脏数据
    for (let x = 0; x < 8; x++) {
      chessBoard[x][y] = 0;
    }
    if (check(i, y)) {
      chessBoard[i][y] = 1;
      if (settleQueen(y + 1)) {
        return true;
      }
    }
  }
  return false;
}

function init() {
  settleQueen(0);

  console.log(chessBoard);
}

init();