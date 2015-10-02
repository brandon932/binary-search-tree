var expect = require('chai').expect;
var BST = require('../bst');
describe('Binary Search Tree', function() {

	describe('Find Nodes', function () {
		var bst;
		beforeEach(function() {
			bst = new BST();
		});
		it('Should find the root node.', function () {
			bst.insert(10, 'root value');
			var result = bst.find(10);
			expect(result.value).to.equal('root value');
		});
		it('Should find the left node.', function () {
			bst.insert(10, 'root value');
			bst.insert(1, 'left value');
			var result = bst.find(1);
			expect(result.value).to.equal('left value');
		});
		it('Should find the right node.', function () {
			bst.insert(10, 'root value');
			bst.insert(20, 'right value');
			var result = bst.find(20);
			expect(result.value).to.equal('right value');
		});
		it('Should find a deep node.', function () {
			bst.insert(10, {name: 'fred'});
			bst.insert(20, {name: 'betty'});
			bst.insert(1, {name: 'wilma'});
			bst.insert(15, {name: 'bam bam'});
			bst.insert(16, {name: 'barney'});
			bst.insert(5, {name: 'george'});
			bst.insert(25, {name: 'jane'});
			bst.insert(2, {name: 'judy'});
			bst.insert(3, {name: 'elroy'});
			var result = bst.find(25);
			expect(result.value.name).to.equal('jane');
		});
	});

	describe('Insert Nodes', function () {
		var bst;
		beforeEach(function() {
			bst = new BST();
		});
		it('Should create a root node.', function () {
			expect(bst.root).to.be.null;
			bst.insert(10);
			expect(bst.root).to.not.be.null;
			expect(bst.root.id).to.equal(10);
		});
		it('Should create a left node.', function () {
			bst.insert(10);
			expect(bst.root.left).to.be.null;
			bst.insert(1);
			expect(bst.root.left).to.not.be.null;
			expect(bst.root.right).to.be.null;
		});
		it('Should create a right node.', function () {
			bst.insert(10);
			expect(bst.root.right).to.be.null;
			bst.insert(20);
			expect(bst.root.left).to.be.null;
			expect(bst.root.right).to.not.be.null;
		});
		it('Should create a right and left node.', function () {
			bst.insert(10);
			expect(bst.root.right).to.be.null;
			expect(bst.root.left).to.be.null;
			bst.insert(20);
			expect(bst.root.right).to.not.be.null;
			bst.insert(1);
			expect(bst.root.left).to.not.be.null;
		});
		it('Should create a more complicated tree.', function () {
			bst.insert(10);
			bst.insert(20);
			bst.insert(1);
			bst.insert(15);
			bst.insert(16);
			bst.insert(5);
			bst.insert(25);
			bst.insert(2);
			expect(bst.root.id).to.equal(10);
			expect(bst.root.left.id).to.equal(1);
			expect(bst.root.left.right.id).to.equal(5);
			expect(bst.root.left.right.left.id).to.equal(2);
			expect(bst.root.right.id).to.equal(20);
			expect(bst.root.right.left.id).to.equal(15);
			expect(bst.root.right.left.right.id).to.equal(16);
			expect(bst.root.right.right.id).to.equal(25);
		});
		it('Should attach a value to a node.', function () {
			bst.insert(10, 'root node!');
			bst.insert(20, 'right node!');
			bst.insert(1, 'left node!');
			expect(bst.root.value).to.equal('root node!');
			expect(bst.root.left.value).to.equal('left node!');
			expect(bst.root.right.value).to.equal('right node!');
		});
	});

});
