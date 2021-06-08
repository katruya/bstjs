// BST tests - to run:
// $ node bst_tester.js

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

(() => {
    const NumNodes = 6;
    const BST = BSTInitializer(NumNodes);

})();