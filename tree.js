function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function preOrder(node) {
  if (node && node.val) {
    return [node.val].concat(preOrder(node.left), preOrder(node.right))
  } else {
    return [];
  }
}

function preOrderStack(node) {
  var stack = [];
  var res = [];
  var curr = node;
  while (curr || stack.length) {
    if (curr) {
      res.push(curr.val)
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      curr = curr.right;
    }
  }

  return res;
}

function inOrder(node) {
  if (node && node.val) {
    return [].concat(inOrder(node.left), node.val, inOrder(node.right))
  } else {
    return [];
  }
}

function inOrderStack(node) {
  var stack = [];
  var res = [];
  var curr = node;
  while (curr || stack.length) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      res.push(curr.val);
      curr = curr.right;
    }
  }
}

function postOrder(node) {
  if (node && node.val) {
    return [].concat(postOrder(node.left), postOrder(node.right), node.val);
  } else {
    return [];
  }
}

function postOrderStack(node) {
  var stack = [];
  var res = [];
  var curr = node;
  var last = null;
  while(curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack[stack.length - 1];
    if (curr.right === null || curr.right === last) {
      res.push(curr.val)
      stack.pop();
      last = curr;
      curr = null
    } else {
      curr = curr.right;
    }
  }
}