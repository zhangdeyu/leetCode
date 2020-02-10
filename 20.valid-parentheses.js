// 20. 有效的括号
/* 
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var stack = [];
    var obj = {
        ')': '(',
        ']': '[',
        '}': '{'
    }

    var i = 0;
    while (i < s.length) {
        if (Object.values(obj).includes(s[i])) {
            stack.push(s[i]);
            i++;
        } else {
            if (stack.length === 0) {
                break;
            } else if (obj[s[i]] === stack.pop()) {
                i++;
            } else {
                break;
            }
        }
    }

    if (i < s.length) {
        return false;
    }

    if (stack.length) {
        return false;
    }

    return true;
};

// var s = '()';
// var s = '()[]{}';
// var s = '(]';
// var s = '([)]';
// var s = '{[]}';
var s = '{[]}(';
console.log(isValid(s))