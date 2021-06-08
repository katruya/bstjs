import Node from './binary_node.js';

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new Node(data);
        
        if (this.getRootNode() === null) {
            this.root = newNode;
            return this;
        }

        let current = this.getRootNode();
        while (current) {
            if (data === current.data) {
                return undefined;
            }
            else if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    return this; 
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } 
        }
    }

    search(data) {
        if (!this.getRootNode()) {
            return false;
        }

        let current = this.getRootNode();
        let found = false;

        while (current && !found) {
            if (data < current.data) {
                current = current.left;
            }
            else if (data > current.data) {
                current = current.right;
            }
            else {
                found = current;
            }
        }

        if (!found) {
            return undefined;
        }

        return found;
    }

    inorder(node) {
        let item = null;
        if (node === null) {
            return;
        }

        else {
            this.inorder(node.left);
            item = node;
            this.inorder(node.right);
        }

        return console.log(item.getData());
    }

    getRootNode() {
        return this.root;
    }
}

export default BinarySearchTree;