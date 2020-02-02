/* 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回[0, 1] */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var obj = {};
    var arr = [];
    var i = 0;
    while (i < nums.length) {
        // 先判断当前元素是否在临时对象中
        var num = nums[i];
        if (obj[num] !== undefined) {
            // 如果在 直接返回
            arr = [obj[num], i];
            break;
        } else {
            obj[target - num] = i;
        }
        i++;
    }

    return arr;
};

// var nums = [2, 7, 11, 15], target = 9;
// var nums = [0, 4, 3, 0], target = 0;
var nums = [-1, -2, -3, -4, -5], target = -8;
var res = twoSum(nums, target);
console.log(res);