// swap-nodes-in-pairs
/* 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。

你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。



示例:

给定 1 -> 2 -> 3 -> 4, 你应该返回 2 -> 1 -> 4 -> 3.

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/swap-nodes-in-pairs
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。 */

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
var swapPairs = function (head) {
    var thead = new ListNode(0)
    var prev = thead;
    prev.next = head;
    while (prev.next && prev.next.next) {
        var a = prev.next;
        var b = a.next;

        prev.next = b;
        a.next = b.next;
        b.next = a;
        prev = prev.next.next
    }

    return thead.next;
};

function arrayToList(arr) {
    var head = new ListNode(0);
    var prev = head;
    var i = 0;
    while (i < arr.length) {
        var curr = new ListNode(arr[i]);
        prev.next = curr;
        prev = prev.next;
        i++;
    }
    return head.next;
}

var arr = [1, 2, 3, 4];
var head = arrayToList(arr);

console.log(JSON.stringify(swapPairs(head)));