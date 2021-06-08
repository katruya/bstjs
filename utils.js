import BinarySearchTree from './bst.js';

const BSTInitializer = (numberOfNodes) => {
    const BST = new BinarySearchTree();

    let bstData = new Array();

    for (let i = 0; i < numberOfNodes; i++) {
        bstData[i] = Math.round(Math.random() * 100);
    }

    bstData.forEach((item) => {
        BST.insert(item);
    });

    return BST;
}

export default BSTInitializer;