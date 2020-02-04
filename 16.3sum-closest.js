// 16. 最接近的三数之和
/* 
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum-closest
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    if (nums.length < 3) {
        return 0;
    }
    nums = nums.sort(function (a, b) {
        return a - b;
    });

    var sum = nums[0] + nums[1] + nums[2];
    for (var i = 0; i < nums.length - 2; i++) {
        var l = i + 1, r = nums.length - 1;

        while (l < r) {
            var s = nums[i] + nums[l] + nums[r];
            var diff = Math.abs(s - target) - Math.abs(sum - target);
            if (diff <= 0) {
                sum = s;
            }
            // 判断条件不能写错
            if (s > target) {
                r --;
            } else if (s < target) {
                l ++;
            } else {
                break;
            }
        }
    }
    return sum;
};

// var nums = [-1, 2, 1, -4], target = 1;
// var nums = [1, 1, -1, -1, 3], target = -1;
// var nums = [0, 2, 1, -3], target = 1;
var nums = [1, 2, 4, 8, 16, 32, 64, 128], target = 82;

console.log(threeSumClosest(nums, target))