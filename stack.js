
// var dailyTemperatures = function(T) {
//     var stack = [];
//     var res = [];
//     for (var i = 0; i < T.length; i ++) {
//         if (stack.length === 0) {
//             stack.push(i);
//         } else {
//             var curr = stack[stack.length - 1];
//             while (T[i] > T[curr] && stack.length) {
//                 res[curr] = i - curr;
//                 stack.pop();
//                 curr = stack[stack.length - 1];
//             }
//             stack.push(i);
//         }
//     }
  

//     for (var j = 0; j < stack.length; j ++) {
//         res[stack[j]] = 0;
//     }
    
//     return res;
// };

// var t = [73,74,75,71,69,72,76,73];
// console.log(dailyTemperatures(t))
// 
// var evalRPN = function(tokens) {
//     var stack = [];
//     var ops = ['+', '-', '*', '/'];
//     for (var i = 0; i < tokens.length; i ++) {
//         var op = tokens[i];
//         if (ops.includes(op)) {
//             var right = stack.pop();
//             var left = stack.pop();
//             var sum;
//             switch(op) {
//                 case '+':
//                     sum = left + right;
//                     break;
//                 case '-':
//                     sum = left - right;
//                     break;
//                 case '*':
//                     sum = left * right;
//                     break;
//                 case '/':
//                     sum = left / right;
//                     break;
//             }
//             stack.push(~~sum);
//         } else {
//             stack.push(~~op);
//         }
//     }
//     return stack.pop();
// };

// var t = ["2","1","+","3","*"];
// console.log(evalRPN(t))
// 

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 中遍历
 // 递归解法
// var inorderTraversal = function(root) {
//     if (root && root.val) {
//         var left = inorderTraversal(root.left);
//         var right = inorderTraversal(root.right);
//         return [].concat(left, root.val, right);
//     }
//     return [];
// };

// 非递归解法
var inorderTraversal = function(root) {
    var stack = [];
    var res = [];
    var curr = root;
    while(curr || stack.length) {
        if (curr) {
            stack.push(curr)
            curr = curr.left;
        } else {
            curr = stack.pop();
            res.push(curr.val);
            curr = curr.right;
        }
    }

    return res;
};

a = new TreeNode(1);
b = new TreeNode(2);
c = new TreeNode(3);
a.right = b;
b.left = c;


// 前序遍历 递归算法  根节点 左子树  右子树
// var preOrder = function(root) {
//     if (root && root.val) {
//         var left = preOrder(root.left);
//         var right = preOrder(root.right);
//         return [].concat(root.val, left, right);
//     }
//     return [];
// }

// 前序遍历 非递归算法即迭代算法
var preOrder = function(root) {
    var stack = [];
    var res = [];
    var curr = root;
    while(curr || stack.length) {
        if (curr) {
            res.push(curr.val);
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            curr = curr.right;
        }
    }

    return res;
}

// 后序遍历 递归算法
var postOrder = function(root) {
    if (root && root.val) {
        var left = postOrder(root.left);
        var right = postOrder(root.right);
        return [].concat(right, root.val, left);
    }
    return [];
}


console.log(inorderTraversal(a))
console.log(preOrder(a))
console.log(postOrder(a))