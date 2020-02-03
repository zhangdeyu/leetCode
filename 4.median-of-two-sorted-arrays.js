// 4. 寻找两个有序数组的中位数
/* 
给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。

示例 1:

nums1 = [1, 3]
nums2 = [2]

则中位数是 2.0
示例 2:

nums1 = [1, 2]
nums2 = [3, 4]

则中位数是 (2 + 3)/2 = 2.5

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var i = 0, j = 0;
    var arr = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            arr.push(nums1[i])
            i++;
        } else {
            arr.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        arr.push(nums1[i])
        i++;
    }

    while (j < nums2.length) {
        arr.push(nums2[j])
        j++;
    }

    console.log(arr)

    var len = arr.length;
    var mid = 0;

    if (len % 2 === 0) {
        mid = (arr[len / 2] + arr[len / 2 - 1]) / 2;
    } else {
        mid = arr[(len - 1) / 2];
    }

    return mid;
};

var nums1 = [1, 3], nums2 = [2];
// var nums1 = [1, 2], nums2 = [3, 4];

var res = findMedianSortedArrays(nums1, nums2);
console.log(res);