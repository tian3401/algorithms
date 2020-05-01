//BFS for Trees 

//Bfs traversal and print in level order 
function levelOrderTree(root) {
  if(!root) return []; 
  //1. Make a queue 
  const queue = [root], //use queue for deque but O(n) insertions
  res = []; 
  //2. Iterate over queue 
  while(queue.length > 0) {
    //3. Keep queue size  
    let currentLevel = [],
     size = queue.length; //important only if need size of levels
    //4. Expand the children 
    for(let i=0; i<size; i++) { //important only if need size of levels
      let node = queue.shift();
      currentLevel.push(node.val);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right); 
    }
    res.push(currentLevel); 
  }
};

//Bfs standard simple template 
function bfsTree(root) {
  if(!root) return []; 
  //1. Make a queue 
  const queue = [root]; //use queue for deque but O(n) insertions
  //2. Iterate over queue 
  while(queue.length > 0) {
    //3. Do work on curr node 
    let node = queue.shift();
    //process work here 

    //4. Exand the children nodes 
    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right); 
  }
  return 
};

//BFS FOR GRAPHS 

//Create adjacency list rep of graph from tree 
function makeGraphUtil(parent, child, graphList) {
  if(parent && child) {
    graphList[parent.val] = [];
    graphList[parent.val].push(child.val);
    graphList[child.val] = [];
    graphList[child.val].push(parent.val); 
  }
  if(root.left) {
    makeGraphUtil(child, child.left, graphList);
  }
  if(root.right) {
    makeGraphUtil(child, child.right, graphList); 
  }
};

//based on solving for k distance problem 
function bfsGraph(graphList, start, dist) { //assumption int start
  //1. Make a queue 
  const queue = [start], //use queue for deque but O(n) insertions
  visited = new Set(); //need if graph 
  //2. Iterate over queue 
  while(queue.length > 0) {
    dist -= 1; 
    if(dist < 0) return queue; 
    //3. Keep queue size
    let size = queue.length;
    //4. Expand the children 
    for(let i=0; i<size; i++) {
      let node = queue.shift();
      visited.push(node);
      for(let neighbor of graphList[node]) {
        if(!visited.has(neighbor)) {
          queue.push(neighbor)
        }
      }
    }
    return queue;//for loop on line 50 lets us reuse the queue as int[] res
  }
};



