/* 二维数组中的查找 
在一个二维数组中，每一行都按照从左到右递增的顺序排序
每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样一个二维数组
和一个整数，判断这个整数是否在数组中。

1  2  8  9
2  4  9  12
4  7  10 13
6  8  11  15

思路：
这个二维数组的规律是
每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序
那么对于右上角的数字9来说 这一行的数字都小于它 这一列的数字都大于它

拿数字7具例
7根9相比，7 < 9 所以这一列可以删除掉 数组变成了
1  2  8 
2  4  9 
4  7  10
6  8  11
因为 7 < 8 所以8这一列也可以删除
1  2
2  4
4  7
6  8

7 > 2 所以7大于这一行的所有数字 这一行可以删除
2  4
4  7
6  8
7 > 4 同理 这一行可以删除
4  7
6  8

7 = 7结束

有点类似于贪心算法
*/

var find = function(arr, num) {
  var row = arr.length - 1;
  var column = arr[0].length - 1;
  var i = 0;
  var j = column;
  var flag = false;
  while (i >=0 && i <= row &&  j >=0 && j <= column) {
    var target = arr[i][j];
    if (target == num) {
      flag = true;
      break;
    } else if (target > num) {
      j --;
    } else if (target < num) {
      i ++;
    }
  }

  return flag;
}

var arr = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
]

console.log(find(arr, 16))