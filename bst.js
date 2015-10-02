var sprintf = require('sprintf').sprintf;

//A node to use with BST
function BSTNode (id, value) {
	this.id = id;
	this.value = value;
	this.left = null;
	this.right = null;
}

//Binary Search Tree Class
function BST () {
	this.root = null;
}
module.exports = BST;

////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// Fill out this method to make the tests green.
// Given an ID, return the BSTNode with the same ID
// by traversing the tree to find it.
// If it is not found in the BST, return undefined.
////////////////////////////////////////////////////
BST.prototype.find = function (id) {
	if (this.root === id) {
		console.log(this.root);
	}
};
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////

//Insert an element into a BST
BST.prototype.insert = function (id, value) {
	var newNode = new BSTNode(id, value);
	//Start tree if nothing exists
	if (this.root === null) {
		this.root = newNode;
		return;
	}
	//Find open spot to insert new node.
	var lastNode = null;
	var currentNode = this.root;
	while (currentNode !== null) {
		if (newNode.id > currentNode.id) {
			lastNode = currentNode;
			currentNode = currentNode.right;
		} else if (newNode.id < currentNode.id) {
			lastNode = currentNode;
			currentNode = currentNode.left;
		} else if (newNode.id === currentNode.id) {
			console.log('Node with id ' + id + ' already exists!');
			return;
		}
	}
	//Insert the new node.
	if (newNode.id > lastNode.id) {
		lastNode.right = newNode;
	} else if (newNode.id < lastNode.id) {
		lastNode.left = newNode;
	}
	return;
}

//Print BST In Order
BST.prototype.printInOrder = function (equalityFunction) {
	this._printInOrder(this.root);
}
//Helper function to recursively print out all values.
BST.prototype._printInOrder = function (node) {
	if (node === null) {
		return;
	}
	this._printInOrder(node.left);
	console.log('id: ', node.id, ' value:', node.value);
	this._printInOrder(node.right);
}

//Print BST In Order
BST.prototype.printTree = function (equalityFunction) {
	this._printTree([this.root]);
}
//Helper function to recursively print out all values.
BST.prototype._printTree = function (nodes) {
	var allNodesNull = nodes.every(function (node) {
		return node === null;
	});
	if (allNodesNull) {
		return;
	}
	var nextNodes = [];
	var ids = [];
	nodes.forEach(function (node) {
		if (node === null) {
			nextNodes.push(null);
			nextNodes.push(null);
			ids.push('#####');
			return;
		}
		nextNodes.push(node.left);
		nextNodes.push(node.right);
		ids.push(sprintf('%05d', node.id));
	});
	console.log(ids.join(' '));
	this._printTree(nextNodes);
}
