'use strict';

const TreeNode = require('./node/TreeNode');

class BinaryTree{
  constructor(root=null) {
    this.root = root;
    this.inOrd = [];
    this.postOrd = [];
    this.preOrd = [];

  }

  inOrderTraversal() {
    if(!this.root) return null;
    this._inOrderTraversal(this.root);
  }

  _inOrderTraversal(root) {
    // Base Case/exit clause - stops recursion
    if(root === null) return null;
    // visit left
    this._inOrderTraversal(root.left);
    // visit root
    this.inOrd.push(root.value);
    //visit right
    this. _inOrderTraversal(root.right);
  }


  postOrderTraversal() {
    if(!this.root) return null;
    this._postOrderTraversal(this.root);
  }
  _postOrderTraversal(root) {
    // Base Case/exit clause - stops recursion
    if(root === null) return null;
    // visit left
    this._postOrderTraversal(root.left);
    //visit right
    this._postOrderTraversal(root.right);
    // visit root
    this.postOrd.push(root.value);
  }

  preOrderTraversal() {
    if(!this.root) return null;
    this._preOrderTraversal(this.root);
  }
  _preOrderTraversal(root) {
    // Base Case/exit clause - stops recursion
    if(root === null) return null;
    // visit root
    this.preOrd.push(root.value);
    // visit left
    this._preOrderTraversal(root.left);
    //visit right
    this._preOrderTraversal(root.right);
  }
}

module.exports = BinaryTree;

