function isBalanced(root) {
  let balanced = true; 
  
  function getHeight(node) {
    if(!node) return 0; 
  
    let left = getHeight(node.left),
        right = getHeight(node.right);
  
    if(Math.abs(left - right) > 1) {
      balanced = false; 
    }
  
    return Math.max(left,right) + 1; 
  }

  getHeight(root);

  return balanced; 

}

