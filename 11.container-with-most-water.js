// 11. 盛最多水的容器
/*
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

示例:

输入: [1,8,6,2,5,4,8,3,7]
输出: 49
 */

/**
* @param {number[]} height
* @return {number}
*/
var maxArea = function (height) {
    /* 1.暴力破解法 两层循环
    if (height.length < 2) {
        return 0;
    }
    var max = 0;
    for (var i = 0; i < height.length - 1; i++) {
        for (var j = i + 1; j < height.length; j++) {
            var area = (j - i) * Math.min(height[i], height[j]);
            if (area > max) {
                max = area;
            }
        }
    }

    return max; */

    /* 
    2. 双指针方法 
    影响面积的因素有两个  长度和高度 area = (j - i) * Math.min(height[i], height[j])
    长度受两元素下标的影响 (j -i)
    高度受Math.min(height[i], height[j])的影响
    在双指针方法中 i跟j从两头开始移动 移动的过程中j - i是越来越小的高度不变的情况下，面积越来越小，只能使高度变大才有可能使得面积增大 
    那么如果移动长版，Math.min(height[i], height[j])只可能变小 不可能变大
    只有移动短板，Math.min(height[i], height[j])才有可能变大
    */
    if (height.length < 2) {
        return 0;
    }
    var i = 0, j = height.length - 1;
    var max = 0;
    while (i !== j) {
        var area = (j - i) * Math.min(height[i], height[j]);
        if (area > max) {
            max = area;
        }
        if (height[i] > height[j]) {
            j --;
        } else {
            i ++;
        }
    }
    return max;
};

var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var res = maxArea(height);
console.log(res)