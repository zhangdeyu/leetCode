/*
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null && l2 == null) {
            return null;
        }
        
        int digit = 0;
        ListNode list = new ListNode(0);
        ListNode poiner = list;
        
        while(l1 != null || l2 != null) {
            int sum = digit;
            if (l1 != null) {
                sum = sum + l1.val;
                l1 = l1.next;
            }
            
            if (l2 != null) {
                sum = sum + l2.val;
                l2 = l2.next;
            }
            
            poiner.next = new ListNode(sum % 10);
            digit = sum / 10;
            poiner = poiner.next;
        }

        if (digit != 0) {
            poiner.next = new ListNode(1);
        }
        
        return list.next;
    }
}