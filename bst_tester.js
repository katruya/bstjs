// BST tests - to run:
// $ node bst_tester.js

import BSTInitializer from './utils.js';

(() => {
    const NumNodes = 6;
    const BST = BSTInitializer(NumNodes);
    const RootNode = BST.getRootNode();

    BST.inorder(RootNode);

})();