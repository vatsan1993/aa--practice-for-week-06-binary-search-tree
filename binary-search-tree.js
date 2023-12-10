// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // Your code here
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // Your code here
    let node = new TreeNode(val);
    if (this.root === null) {
      this.root = node;
    } else if (val < currentNode.val && currentNode.left === null) {
      currentNode.left = node;
    } else if (val > currentNode.val && currentNode.right === null) {
      currentNode.right = node;
    } else if (val < currentNode.val) {
      this.insert(val, currentNode.left);
    } else if (val > currentNode.val) {
      this.insert(val, currentNode.right);
    }
  }

  search(val) {
    // Your code here
  }

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };

// let bst = new BinarySearchTree();
// bst.insert(4);
// bst.insert(2);
// bst.insert(6);
// bst.insert(1);
// bst.insert(3);
// bst.insert(5);
// bst.insert(7);

// console.log(bst.root.val);
// console.log(bst.root.left.val);
