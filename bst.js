import Node from './binary_node';

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

    getRootNode() {
        return this.root;
    }
}