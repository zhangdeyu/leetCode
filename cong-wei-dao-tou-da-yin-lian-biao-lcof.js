/* 面试题06. 从尾到头打印链表 */
/* 
输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

示例 1：
输入：head = [1,3,2]
输出：[2,3,1]

限制：
0 <= 链表长度 <= 10000

*/

/* 
从尾到头打印链表
第一种最简单的方案：翻转链表然后打印  这样缺点在于会打乱链表原来的结构
第二种方案：使用栈 先从头到尾遍历链表入栈，然后先进后出的原则 最终输出的是从尾到头的结果
第三种方案: 递归本身就是栈的结构，那么可以用递归的思路去实现。每访问一个节点，先输出他后面的节点然后再输出自己。

*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (head) {
    return reversePrint(head.next).concat(head.val);
  } else {
    return []
  }
};