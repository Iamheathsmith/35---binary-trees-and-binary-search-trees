# lab 35: Binary Trees and Binary Search Trees

---
### Installing and How to use.

To install this program, place fork and 'git clone' this repo to your computer. From the terminal, navigate to  `lab-heath`. once there, install NPM but typing in , `nmp install` and after that, you will neex to install all the dependencies. do this by typing in `npm i`. 

next you need to have these scripts adjusted in your package.json file.

```javascript
"scripts": {
    "test": "jest --verbose",
    "lint": "eslint"
  },
  ```
## helpful commands 

type in `node index.js help` to get a short cut to all the helpful commands

## BinaryTree: how to use

from there, you can go to your terminal and type, 

```javascript
node index.js inorder
```
you will get this back after it runs the inOrder function

```javascript
[ 6, 8, 7, 9, 2, 1, 4, 3, 5 ]
```

```javascript
node index.js postorder
```
you will get this back after it runs the postOrder function

```javascript
[ 1, 2, 6, 7, 8, 9, 3, 4, 5 ]
```

```javascript
node index.js preorder
```
you will get this back after it runs the preOrder function

```javascript
[ 8, 9, 7, 6, 2, 4, 5, 3, 1 ]
```


## BinarySearchTree: how to use

from there, you can go to your terminal and type, 

```javascript
node index.js insert
```
it will automaticly inport 4 into the BST
this is what you will get back

```javascript
TreeNode { value: 4, left: null, right: null }
```

```javascript
node index.js find
```
it will find the node with the value of 20.
this is what you will get back

```javascript
TreeNode {
  value: 20,
  left:
   TreeNode {
     value: 15,
     left: TreeNode { value: 13, left: null, right: null },
     right: TreeNode { value: 17, left: [TreeNode], right: null } },
  right: TreeNode { value: 22, left: null, right: null } }
```

```javascript
node index.js getheight
```
it will find the height of the 20 node to the end.
this is what you will get back

```javascript
4
```

```javascript
node index.js isbalanced
```
this will look at the BST and let you know if its balanced or not.
this is what you will get back

```javascript
false
```

```javascript
node index.js findparent
```
this will find the parent of the node that you enter. this case its 20
this is what you will get back

```javascript
TreeNode {
  value: 10,
  left: TreeNode { value: 5, left: null, right: null },
  right:
   TreeNode {
     value: 20,
     left: TreeNode { value: 15, left: [TreeNode], right: [TreeNode] },
     right: TreeNode { value: 22, left: null, right: null } } }
```

```javascript
node index.js findrnr
```
this will find the heighest node on the right side of a node that you pick, this is used to help remove a node that has 2 leafs
this is what you will get back

```javascript
TreeNode { value: 22, left: null, right: null }
```

```javascript
node index.js remove
```
this will remove the node that you selecet, this case its 20
this is what you will get back

```javascript
complete
am searching for 20, its null
```
## big-O

all the BinarySearhTree is (log-N), the BinaryTree traversal is O(n)

## test...

type in `npm run test` to see that we have 47 out of 47 test passing in 2 test suites

```javascript
Test Suites: 2 passed, 2 total
Tests:       47 passed, 47 total
```

we have done testing for the 

* inOrderTraversal()
* postOrderTraversal()
* preOrderTraversal()
* BTS insert()
* BTS find()
* BTS getHeight()
* BTS isBalanced()
* BTS findParent()
* BTS findRnR()
* BTS remove()





