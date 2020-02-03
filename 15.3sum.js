// 15. 三数之和
/* 
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例：

给定数组 nums = [-1, 0, 1, 2, -1, -4]，
满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	if (nums.length < 3) {
		return [];
	}
	nums = nums.sort(function (a, b) {
		return a - b;
	});

	var arr = [];
	for (var i = 0; i < nums.length - 2; i++) {
		var l = i + 1, r = nums.length - 1;
		if (i > 0 && nums[i] === nums[i - 1]) continue;
		while (l < r) {
			var s = nums[i] + nums[l] + nums[r];
			if (s === 0) {
				arr.push([nums[i], nums[l], nums[r]]);
				while (l < r && nums[l] === nums[l + 1]) {
					l++;
				}
				while (l < r && nums[r] === nums[r - 1]) {
					r--;
				}
				l++;
				r--;
			} else if (s < 0) {
				l++;
			} else {
				r--;
			}
		}
	}

	return arr;
};

// var nums = [-1, 0, 1, 2, -1, -4];
var nums = [-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6];
console.log(threeSum(nums))