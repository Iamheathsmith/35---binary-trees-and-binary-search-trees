'use strict';

const TreeNode = require('../node/TreeNode');
const BinaryTree = require('../BinaryTree');
require('jest');

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



describe('BinaryTree Constructor', () => {

  describe('BinaryTree inOrderTraversal method;', () => {
    binaryTree.inOrderTraversal();

    it('check the root, before going', () => {
      expect(binaryTree.root.value).toEqual(1);
    });
    it('check to see if has an array with the length of items in it', () => {
      expect(binaryTree.inOrd.length).toBe(9);
    });
    it('check to see the last item in the array is 5', () => {
      expect(binaryTree.inOrd[8]).toBe(5);
    });
    it('check to see the what item is at index 4 in the array is 2', () => {
      expect(binaryTree.inOrd[4]).toBe(2);
    });
    it('check to see the if the array matches what it should be', () => {
      expect(binaryTree.inOrd).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
    });
  });

  describe('BinaryTree postOrderTraversal method;', () => {
    binaryTree.postOrderTraversal();

    it('check the root, before going', () => {
      expect(binaryTree.root.value).toEqual(1);
    });
    it('check to see if has an array with the length of items in it', () => {
      expect(binaryTree.postOrd.length).toBe(9);
    });
    it('check to see the last item in the array is 1', () => {
      expect(binaryTree.postOrd[8]).toBe(1);
    });
    it('check to see the what item is at index 4 in the array is 2', () => {
      expect(binaryTree.postOrd[4]).toBe(2);
    });
    it('check to see the if the array matches what it should be', () => {
      expect(binaryTree.postOrd).toEqual([8, 9, 7, 6, 2, 4, 5, 3, 1]);
    });
  });

  describe('BinaryTree preOrderTraversal method;', () => {
    binaryTree.preOrderTraversal();

    it('check the root, before going', () => {
      expect(binaryTree.root.value).toEqual(1);
    });
    it('check to see if has an array with the length of items in it', () => {
      expect(binaryTree.preOrd.length).toBe(9);
    });
    it('check to see the last item in the array is 5', () => {
      expect(binaryTree.preOrd[8]).toBe(5);
    });
    it('check to see the what item is at index 4 in the array is 8', () => {
      expect(binaryTree.preOrd[4]).toBe(8);
    });
    it('check to see the if the array matches what it should be', () => {
      expect(binaryTree.preOrd).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
    });
  });

});