'use strict';


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
/* need this here for  */

class BST {
  constructor(root = null) {
    this.root = root;
    this.parent = null;
  }
  
  /* insert */
  insert(node) {
    if(this.root === null) {
      this.root = node;
    } else {
      this._insert(this.root, node);
    }
  }
  _insert(root, node) {
    if(node.value < root.value) {
      if (!root.left) {
        root.left = node;
      } else {
        this._insert(root.left, node);
      }
    } else {
      if (!root.right) {
        root.right = node;
      } else {
        this._insert(root.right, node);
      }
    }
  }

  /* find */
  find(value) {
    return this._find(this.root, value);
  }
  _find(root, value) {
    if(!root) {
      return null;
    } else if(root.value === value) {
      return root;
    } else if(root.value < value) {
      return this._find(root.right, value);
    } else {
      return this._find(root.left, value);
    }
  }

  /* get height */
  getHeight(node) {
    if(node === null) return 0;
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }

  /* balance */
  isBalanced(root) {
    if (root === null) { // Base case
      return true;
    }
    var heightDifference = Math.abs(this.getHeight(root.left) - this.getHeight(root.right));
    if (heightDifference > 1) {
      return false;
    } else {
      return this.isBalanced(root.left) && this.isBalanced(root.right);
    }
  }

  /* helper for remove */
  findParent(val) {
    return this._findParent(this.root, val);
  }
  _findParent(root, val) {
    if(!root) {
      return null;

    } else if(root.value === val) {
      return this.parent;

    } else if(root.value < val) {
      this.parent = root;
      return this._findParent(root.right, val);

    } else {
      this.parent = root;
      return this._findParent(root.left, val);
    }
  }

  
  // -------------------------------------------
  /* helper for remove */
  findRnR(node) {
    return this._findRnR(node);
  }
  _findRnR(root) {
    if(root.right === null) {
      return root;

    } else if(root.right === null && root.left === null) {
      return root;

    } else if(root.right !== null) {
      return this._findRnR(root.right);

    } else {
      return this._findRnR(root.left);
    }
  }

  // -------------------------------------------  


  remove(value) {
    let parent = this.findParent(value);
    this.removeNode(value, parent);
  }

  /* remove */
  removeNode(value, parent) {
    let current;
    let direction;


    //find the current node to remove.
    if(parent.right.value === value) {
      current = parent.right;
    } else {
      current = parent.left;
    }

    //remove no kids node
    if (current.right === null && current.left === null) {
      if (parent.right.value === value) {
        parent.right = null;
      } else {
        parent.left = null;
      }
    }

    //getting the direction of current from parent
    if (parent.right.value === value) {
      direction = 'right';
    } else {
      direction = 'left';
    }

    //remove with 1 kids node
    if (current.right === null) {
      if (current.left !== null) {
        parent[direction] = current.left;
      }
    } 

    if (current.left === null) {
      if (current.right !== null) {
        parent[direction] = current.right;
      }
    } 

    //removeing with 2 kids on node
    if(current.right !== null && current.left !== null) {
      console.log('i have 2 kids');
      let newNode = this.findRnR(current.left);
      this.remove(newNode.value);
      current.value = newNode.value;
    }

  }
}



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

// console.log('finding', bst.find(8));
// console.log('finding', bst.find(100));
// console.log('hieght is', bst.getHeight(bst.find(5)));
// console.log('balanced?', bst.isBalanced(bst.find(5)));
// console.log('this is removed after', bst.removeNode(8));
// console.log('finding parent', bst.findParent(16));
console.log('removeing', bst.remove(20));
console.log('finding', bst.find(20));
console.log('finding', bst.find(17));
console.log('%%%%%%%%%%%%%%%%%%%',bst);