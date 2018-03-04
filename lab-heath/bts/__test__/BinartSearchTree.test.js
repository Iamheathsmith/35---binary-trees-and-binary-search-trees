'use strict';

const TreeNode = require('../node/TreeNode');
const BST = require('../BinarySearchTree');
require('jest');

let bst = new BST();
//root
bst.insert(new TreeNode(10));

bst.insert(new TreeNode(5));
bst.insert(new TreeNode(20));
bst.insert(new TreeNode(22));
bst.insert(new TreeNode(15));
bst.insert(new TreeNode(17));
bst.insert(new TreeNode(16));
bst.insert(new TreeNode(13));


describe('BinaryTree Constructor', () => {

  describe('BinarySearchTree INSERT method;', () => {
    bst.insert(new TreeNode(4));
    it('check the root, before going', () => {
      expect(bst.root.value).toEqual(10);
    });
    it('check to see if the value was added in the right place', () => {
      expect(bst.root.left.left.value).toBe(4);
    });
    it('check to see if it has any kids', () => {
      expect(bst.root.left.left.left).toBe(null);
      expect(bst.root.left.left.right).toBe(null);
    });
    it('check to see if the parent is 5', () => {
      expect(bst.root.left.value).toBe(5);
    });
  });

  describe('BinarySearchTree FIND method;', () => {
 
    it('check to see if it has any kids', () => {
      expect(bst.find(4).left).toBe(null);
      expect(bst.find(4).right).toBe(null);
    });
    it('should return null if item is not in tree', () => {
      expect(bst.find(100)).toBe(null);
    });
    it('finds 20 and checks to see what the kids values are.', () => {
      expect(bst.find(20).right.value).toBe(22);
      expect(bst.find(20).left.value).toBe(15);
    });
  });

  describe('BinarySearchTree getHeight method;', () => {
 
    it('checks the height of the whole tree from root', () => {
      expect(bst.getHeight(bst.find(10))).toBe(5);
    });
    it('checks the height of from level 1', () => {
      expect(bst.getHeight(bst.find(20))).toBe(4);
    });
    it('checks the height of from level 2', () => {
      expect(bst.getHeight(bst.find(15))).toBe(3);
    });
    it('checks the height of from level 5', () => {
      expect(bst.getHeight(bst.find(16))).toBe(1);
    });
    it('if no node, return 0', () => {
      expect(bst.getHeight(bst.find(30))).toBe(0);
    });
  });

  describe('BinarySearchTree isBalanced method;', () => {

    it('check the root, before going', () => {
      expect(bst.root.value).toEqual(10);
    });
    it('checks a false tree', () => {
      expect(bst.isBalanced(bst.find(10))).toBe(false);
    });
    it('should return no node exists if nothing is found', () => {
      expect(bst.isBalanced(bst.find(100))).toBe(null);
    });
    it('should return no node exists if nothing is found', () => {
      let test = new BST();
      test.insert(new TreeNode(10));
      test.insert(new TreeNode(5));
      test.insert(new TreeNode(20));
      expect(test.isBalanced(test.find(10))).toBe(true);
    });
  });

  describe('BinarySearchTree findParent method;', () => {
    
    it('check the root, before going', () => {
      expect(bst.root.value).toEqual(10);
    });
    it('checks a false tree', () => {
      expect(bst.findParent(10)).toBe(null);
    });
    it('should return 10 as the parent to 20', () => {
      expect(bst.findParent(20).value).toBe(10);
    });
    it('should return 17 as the parent to 16', () => {
      expect(bst.findParent(16).value).toBe(17);
    });
    it('should return null as 200 does not exist', () => {
      expect(bst.findParent(200)).toBe(null);
    });
  });

  describe('BinarySearchTree findRnR method;', () => {
 
    it('finds the highest right node from starting point', () => {
      expect(bst.findRnR(bst.find(20)).value).toBe(22);
    });
    it('finds the highest right node from starting point', () => {
      expect(bst.findRnR(bst.find(15)).value).toBe(17);
    });
    it('should return it self since it has no right. ', () => {
      expect(bst.findRnR(bst.find(5)).value).toBe(5);
    });
    it('should return it self since it has no leafs/kids. ', () => {
      expect(bst.findRnR(bst.find(4)).value).toBe(4);
    });
    it('should return 30 as the farthest/highest right node with no rights left. ', () => {
      bst.insert(new TreeNode(30));
      expect(bst.findRnR(bst.find(20)).value).toBe(30);
    });
  });

  describe('BinarySearchTree remove method;', () => {
    let takeAway = new BST();
    takeAway.insert(new TreeNode(10));// this is root
    takeAway.insert(new TreeNode(5));
    takeAway.insert(new TreeNode(4));
    takeAway.insert(new TreeNode(20));
    takeAway.insert(new TreeNode(22));
    takeAway.insert(new TreeNode(15));
    takeAway.insert(new TreeNode(17));
    takeAway.insert(new TreeNode(16));
    takeAway.insert(new TreeNode(13));

    it('checks the parents of node to remove', () => {
      expect(takeAway.findParent(20).value).toBe(10);
      expect(takeAway.root.value).toBe(10);
      expect(takeAway.root.right.value).toBe(20);
    });
    it('2 KIDS -- removed the node from the list', () => {
      expect(takeAway.remove(20)).toBe('complete');
    });
    it('the node when looked for should return null', () => {
      expect(takeAway.find(20)).toBe(null);
    });
    it('2 KIDS -- should should have been replaced with the highest left => right node with no right leafs.', () => {
      expect(takeAway.root.right.value).toBe(17);
    });
    it('1 KID -- should remove and replace with the highest node on left side if no right side is present', () => {
      expect(takeAway.remove(5)).toBe('complete');
      expect(takeAway.root.left.value).toBe(4);
    });
    it('NO KID - should remove and set place to NULL', () => {
      expect(takeAway.remove(4)).toBe('complete');
      expect(takeAway.root.left).toBe(null);
    });
  });

});