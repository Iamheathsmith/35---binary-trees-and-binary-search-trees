'use strict';

const TreeNode = require('./bts/node/TreeNode');
const BinaryTree = require('./bts/BinaryTree');
const BST = require('./bts/BinarySearchTree');

//BinaryTree for index
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
binaryTree.root = one;//root

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

//BinarySearchTree for Index
let bst = new BST();
bst.insert(new TreeNode(10));//root

bst.insert(new TreeNode(5));
bst.insert(new TreeNode(20));
bst.insert(new TreeNode(22));
bst.insert(new TreeNode(15));
bst.insert(new TreeNode(17));
bst.insert(new TreeNode(16));
bst.insert(new TreeNode(13));

let test = process.argv[2];

if (test === 'inorder'){
  binaryTree.inOrderTraversal();
  console.log(binaryTree.inOrd);
}
if (test === 'preorder'){
  binaryTree.postOrderTraversal();
  console.log(binaryTree.postOrd);
}
if (test === 'postorder'){
  binaryTree.preOrderTraversal();
  console.log(binaryTree.preOrd);
}

if (test === 'insert'){
  bst.insert(new TreeNode(4));
  console.log(bst.find(4));
}
if (test === 'find'){
  console.log('this finds the node with the value of 20');
  console.log(bst.find(20));
}
if (test === 'getheight'){
  console.log('this finds the height of the 20 we just found');
  console.log(bst.getHeight(bst.find(20)));
}
if (test === 'isbalanced'){
  console.log(bst.isBalanced(bst.find(10)));
}
if (test === 'findparent'){
  console.log(bst.findRnR(bst.find(20)));
}
if (test === 'findrnr'){
  console.log(bst.findRnR(bst.find(20)));
}
if (test === 'WTF'){
  console.log(funny());
}
if (test === 'remove'){
  console.log(bst.remove(20));
  console.log('am searching for 20, its',bst.find(20));
}

if (test === 'help'){
  console.log('hello');
  console.log('** -- inOrder search, type in "node index.js inorder"');
  console.log('** -- postOrder search, type in "node index.js postorder"');
  console.log('** -- preOrder search, type in "node index.js preorder"');

  console.log('** -- insert an node, type in "node index.js insert"');
  console.log('** -- find an node, type in "node index.js find"');
  console.log('** -- get the height from a node, type in "node index.js getheight"');
  console.log('** -- see if its balanced, type in "node index.js isbalanced"');
  console.log('** -- find the parent of the node, type in "node index.js findparent"');
  console.log('** -- find the findrnr(right heighest right), type in "node index.js findrnr"');
  console.log('** -- to remove a node, type in "node index.js remove"');
  console.log('** -- to remove a node, type in "node index.js WTF"');
}





let funny = function() {
  while(true) {
    console.log('HAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAHHAAHAHAHHAHAHAHAH');
  }
};