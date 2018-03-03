'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree{
  constructor(root=null) {
    this.root = root;
  }

  inOrderTraversal() {
    if(!this.root) return null;
    this._inOrderTraversal(this.root)
  }

  _inOrderTraversal(root) {
    // Base Case/exit clause - stops recursion
    if(root === null) return null;
    // visit left
    this._inOrderTraversal(root.left);
    // visit root
    console.log(`Visiting ${root.value}`);
    //visit right
    this. _inOrderTraversal(root.right);
  }


  postOrderTraversal() {
    if(!this.root) return null;
    this._postOrderTraversal(this.root)
  }
  _postOrderTraversal(root) {
    // Base Case/exit clause - stops recursion
    if(root === null) return null;
    // visit left
    this._postOrderTraversal(root.left);
    //visit right
    this._postOrderTraversal(root.right);
    // visit root
    console.log(`Visiting ${root.value}`);
  }

  preOrderTraversal() {
    if(!this.root) return null;
    this._preOrderTraversal(this.root)
  }
  _preOrderTraversal(root) {
    // Base Case/exit clause - stops recursion
    if(root === null) return null;
    // visit root
    console.log(`Visiting ${root.value}`);
    // visit left
    this._preOrderTraversal(root.left);
    //visit right
    this._preOrderTraversal(root.right);
  }
}


let one = new TreeNode(1);
let two = new TreeNode(2);
let three = new TreeNode(3);
let four = new TreeNode(4);
let five = new TreeNode(5);
let six = new TreeNode(6);
let seven = new TreeNode(7);
let eight = new TreeNode(8);
let nine = new TreeNode(9);

let binaryTree = new BinaryTree();
binaryTree.root = one;
one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

binaryTree.inOrderTraversal();
console.log('#######################')
binaryTree.postOrderTraversal();
console.log('$$$$$$$$$$$$$$$$$$$$$$$')
binaryTree.preOrderTraversal();
