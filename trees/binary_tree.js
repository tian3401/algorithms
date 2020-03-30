//standard template for binary tree 
function maxDepth(root) {
  if(!root) return 0;

  const left = maxDepth(root.left),
        right = maxDepth(root.right);

  return Math.max(left, right) + 1; 
}

//standard template for isBalanced binary tree
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

//alternative template with helper fn outside of main function
function isBalanced(root) {
  return getHeight(root) != -1; 
}

function getHeight(node) {

  if(!node) return 0;

  const left = getHeight(node.left),
        right = getHeight(node.right); 

  if(left == -1 || right == -1) return -1; 
  if(Math.abs(left - right) > 1) {
    return -1; 
  }
  
  return Math.max(left, right) + 1; 
}

