// 239. 滑动窗口最大值
// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
// 返回滑动窗口中的最大值。
// 示例:

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 
// 解释: 

//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

// 提示：
// 你可以假设 k 总是有效的，在输入数组不为空的情况下，1 ≤ k ≤ 输入数组的大小。

// 解法1
// var maxSlidingWindow = function(nums, k) {
//     var queue = [];
//     var res = [];
//     if (nums.length === 0) {
//         return []
//     }

//     var i = 0;
//     while(i < nums.length) {
//         if (queue.length < k) {
//             queue.push(nums[i]);
//         } else {
//             queue.shift();
//             queue.push(nums[i]);
//         }
//         if (queue.length === k) {
//             res.push(Math.max.apply(null, queue))
//         }

//         i ++;
//     }

//     return res;
// };

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var maxSlidingWindow = function(nums, k) {
   if (nums.length === 0) {
       return [];
   }

   var queue = [], res = [];

   var i = 0;
   while (i < nums.length) {
       if (i >= k && queue[0] <= i - k) {
           queue.shift();
       }
       while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
           queue.pop();
       }
       queue.push(i)

       if (i >=  k - 1) {
           res.push(nums[queue[0]]);
       } 
       console.log(i, queue, res)

       i ++;
   }

   return res;
};

// var nums = [1,3,-1,-3,5,3,6,7], k = 3;
var nums = [1,3,1,2,0,5], k = 3;
console.log(maxSlidingWindow(nums, k))