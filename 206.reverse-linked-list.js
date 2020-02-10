/* 反转一个单链表。

示例:

输入: 1 -> 2 -> 3 -> 4 -> 5 -> NULL
输出: 5 -> 4 -> 3 -> 2 -> 1 -> NULL */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 1.迭代方案
/* var reverseList = function (head) {
    var list = null;
    var curr = head;
    while (curr) {
        var next = curr.next;
        curr.next = list;
        list = curr;
        curr = next;
    }

    return list;
}; */

// 2.尾递归
/* var reverseList = function (head) {
    var reverse = function(curr, list) {
        if (!curr) {
            return list;
        }
        var next = curr.next;
        curr.next = list;
        list = curr;
        curr = next;
        return reverse(curr, list);
    }

    return reverse(head, null);
}; */

// 3.递归
// var reverseList = function (head) {
//     if (!head || !head.next) {
//         return head;
//     }
//     var next = head.next;
//     var reverseHead = reverseList(next);
//     head.next = null;
//     next.next = head;
//     return reverseHead;
// };

// 4.栈
var reverseList = function (head) {
    var stack = []
    var curr = head;
    var list = new ListNode(0)
    var prev = list;
    while (curr) {
        stack.push(curr.val);
        curr = curr.next;
    }
    console.log(stack)

    while (stack.length) {
        prev.next = new ListNode(stack.pop());
        prev = prev.next;
    }
    return list.next;
};

function arrayToList(arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        var p = new ListNode(arr[i]);
        p.next = list;
        list = p;
    }

    return list;
}

var arr = [1, 2, 3, 4, 5]
var list = arrayToList(arr)
console.log(reverseList(list));
// console.log(reverseList(list))
